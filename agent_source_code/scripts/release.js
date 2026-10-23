import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'
import {
  APP_VERSION,
  GITHUB_REPO_OWNER,
  GITHUB_REPO_NAME,
} from '../src/config/constants.js'
import logger from '../src/utils/logger.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const agentRoot = path.resolve(__dirname, '..')

const GH_TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN
if (!GH_TOKEN) {
  logger.error('Release', 'GH_TOKEN not found in scanandprint-agent/.env! Please specify GH_TOKEN.')
  process.exit(1)
}

const version = APP_VERSION
const tag = `v${version}`
const repoOwner = GITHUB_REPO_OWNER
const repoName = GITHUB_REPO_NAME

logger.box('SCAN&PRINT DESKTOP AGENT — AUTO-RELEASE PIPELINE', [
  `Target Version : ${version} (${tag})`,
  `Target GitHub  : ${repoOwner}/${repoName}`,
  `Node Version   : ${process.version}`,
])

logger.step(1, 6, 'Closing running Scan&Print agent processes to release file locks...')
try {
  if (process.platform === 'win32') {
    execSync(
      `powershell -Command "Get-Process | Where-Object { $_.ProcessName -like '*Scan&Print*' -or $_.ProcessName -like '*electron*' } | Stop-Process -Force -ErrorAction SilentlyContinue; exit 0"`,
      { stdio: 'ignore' }
    )
    logger.success('Release', 'Existing agent processes terminated cleanly.')
  }
} catch {
  // Ignore process kill errors
}

logger.step(2, 6, 'Checking & Preparing GitHub Release Container...')
async function getOrCreateRelease() {
  const listRes = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases`, {
    headers: {
      Authorization: `token ${GH_TOKEN}`,
      'User-Agent': 'ScanAndPrint-Release-Script',
    },
  })
  const releases = await listRes.json()

  const matchingReleases = Array.isArray(releases)
    ? releases.filter((r) => r.tag_name === tag || r.name === version || r.name === tag)
    : []
  let primaryRelease = matchingReleases.find((r) => !r.draft) || matchingReleases[0]

  if (matchingReleases.length > 1) {
    logger.warn('Release', `Found ${matchingReleases.length} releases for ${tag}. Cleaning duplicates...`)
    for (const r of matchingReleases) {
      if (r.id !== primaryRelease.id && r.draft) {
        logger.info('Release', `Deleting stray draft release ${r.id}...`)
        await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases/${r.id}`, {
          method: 'DELETE',
          headers: { Authorization: `token ${GH_TOKEN}`, 'User-Agent': 'ScanAndPrint-Release-Script' },
        })
      }
    }
  }

  if (!primaryRelease) {
    logger.info('Release', `Creating release container ${tag} on GitHub...`)
    const createRes = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases`, {
      method: 'POST',
      headers: {
        Authorization: `token ${GH_TOKEN}`,
        'Content-Type': 'application/json',
        'User-Agent': 'ScanAndPrint-Release-Script',
      },
      body: JSON.stringify({
        tag_name: tag,
        name: tag,
        draft: true,
        prerelease: false,
        body: `### Scan&Print Desktop Agent ${tag}

#### Highlights in ${tag}:
- **Live Shop Database Analytics**: Real-time daily revenue, prints, completed jobs, monthly & lifetime ledger synced directly via Shop ID.
- **Hardware Capability Routing**: Automatic B&W, Color, and Duplex routing powered by Windows WMI driver capabilities.
- **Zero-Click Spooling & Counter Order Popup**: Instant background PDF pre-downloading for 0ms counter approval printing.
- **Differential Silent Auto-Updates**: Seamless background update installation for Windows 10/11.

Built on ${new Date().toISOString()}`,
      }),
    })
    primaryRelease = await createRes.json()
    logger.success('Release', `Release container created (ID: ${primaryRelease.id})`)
  } else {
    logger.info('Release', `Existing release found (ID: ${primaryRelease.id}, draft: ${Boolean(primaryRelease.draft)})`)
  }

  return primaryRelease
}

async function uploadMissingAsset(releaseId, filename, uploadName) {
  const filePath = path.join(agentRoot, 'dist', filename)
  if (!fs.existsSync(filePath)) {
    logger.warn('Release', `Cannot find local file to upload: ${filePath}`)
    return
  }

  const fileData = fs.readFileSync(filePath)
  logger.info('Release', `Uploading ${uploadName} (${Math.round(fileData.length / 1024)} KB)...`)
  const uploadRes = await fetch(
    `https://uploads.github.com/repos/${repoOwner}/${repoName}/releases/${releaseId}/assets?name=${encodeURIComponent(uploadName)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${GH_TOKEN}`,
        'Content-Type': 'application/octet-stream',
        'User-Agent': 'ScanAndPrint-Release-Script',
        'Content-Length': fileData.length,
      },
      body: fileData,
    }
  )

  if (uploadRes.status === 201) {
    logger.success('Release', `Uploaded asset ${uploadName}`)
  } else if (uploadRes.status === 422) {
    logger.info('Release', `Asset ${uploadName} already exists on GitHub`)
  } else {
    logger.warn('Release', `Upload response status: ${uploadRes.status} for ${uploadName}`)
  }
}

async function main() {
  const release = await getOrCreateRelease()

  logger.step(3, 6, 'Running electron-builder Windows NSIS compilation...')
  try {
    execSync('npx electron-builder --win nsis --publish always', {
      cwd: agentRoot,
      stdio: 'inherit',
      env: {
        ...process.env,
        GH_TOKEN,
        GITHUB_TOKEN: GH_TOKEN,
      },
    })
    logger.success('Build', 'electron-builder compilation finished successfully.')
  } catch (err) {
    logger.error('Build', 'electron-builder compilation failed:', err.message)
    process.exit(1)
  }

  logger.step(4, 6, 'Verifying & Reconciling release artifacts on GitHub...')
  const checkRes = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases/${release.id}`, {
    headers: { Authorization: `token ${GH_TOKEN}`, 'User-Agent': 'ScanAndPrint-Release-Script' },
  })
  const currentRelease = await checkRes.json()
  const existingAssetNames = (currentRelease.assets || []).map((a) => a.name)
  logger.info('Release', `Assets registered on GitHub: ${existingAssetNames.join(', ') || 'none'}`)

  const exeName = `scan-and-print-agent-setup-${version}.exe`
  const blockmapName = `scan-and-print-agent-setup-${version}.exe.blockmap`
  const localExeFilename = `Scan&Print Agent Setup ${version}.exe`
  const localBlockmapFilename = `Scan&Print Agent Setup ${version}.exe.blockmap`

  if (!existingAssetNames.includes('latest.yml')) {
    await uploadMissingAsset(release.id, 'latest.yml', 'latest.yml')
  }
  if (!existingAssetNames.includes(blockmapName)) {
    await uploadMissingAsset(release.id, localBlockmapFilename, blockmapName)
  }
  if (!existingAssetNames.includes(exeName)) {
    await uploadMissingAsset(release.id, localExeFilename, exeName)
  }

  logger.step(5, 6, 'Publishing release from draft to public status...')
  const publishRes = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases/${release.id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `token ${GH_TOKEN}`,
      'Content-Type': 'application/json',
      'User-Agent': 'ScanAndPrint-Release-Script',
    },
    body: JSON.stringify({
      draft: false,
      prerelease: false,
      name: tag,
      tag_name: tag,
    }),
  })
  const publishedData = await publishRes.json()
  logger.success('Release', `Release published with ID ${publishedData.id}`)

  logger.step(6, 6, 'Release Deployment Complete!')
  logger.box(`RELEASE ${tag} IS NOW LIVE AND PUBLIC!`, [
    `Release URL : https://github.com/${repoOwner}/${repoName}/releases/tag/${tag}`,
    `Download    : https://github.com/${repoOwner}/${repoName}/releases/download/${tag}/${exeName}`,
    `Published At: ${publishedData.published_at || new Date().toISOString()}`,
  ])
}

main().catch((err) => {
  logger.error('Release', 'Fatal release error:', err)
  process.exit(1)
})
