import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assetsDir = path.resolve(__dirname, '../assets')
const buildDir = path.resolve(__dirname, '../build')

// Resolve source icon dynamically from CLI argument, env variable, or bundled assets
const sourceCandidates = [
  process.argv[2],
  process.env.ICON_SOURCE_PATH,
  path.join(assetsDir, 'icon-full.svg'),
  path.join(assetsDir, 'icon.svg'),
  path.join(assetsDir, 'icon.png'),
].filter(Boolean)

const sourceIconPath = sourceCandidates.find((p) => fs.existsSync(p))

async function generateAll() {
  if (!sourceIconPath) {
    throw new Error('No source icon file found in assets/ or via CLI argument.')
  }

  console.log(`Generating official Scan&Print app icons from: ${sourceIconPath}`)

  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true })
  if (!fs.existsSync(buildDir)) fs.mkdirSync(buildDir, { recursive: true })

  const icon512 = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  })
    .composite([
      {
        input: await sharp(sourceIconPath)
          .resize(460, 460, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .png()
          .toBuffer(),
        top: 26,
        left: 26,
      },
    ])
    .png()
    .toBuffer()

  fs.writeFileSync(path.join(assetsDir, 'icon.png'), icon512)
  console.log('[OK] assets/icon.png created (512x512 PNG)')

  const sizes = [256, 128, 64, 48, 32, 16]
  const pngBuffers = []

  for (const size of sizes) {
    const pad = Math.max(1, Math.round(size * 0.06))
    const innerSize = size - pad * 2

    const innerBuf = await sharp(sourceIconPath)
      .resize(innerSize, innerSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer()

    const buf = await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    })
      .composite([{ input: innerBuf, top: pad, left: pad }])
      .png()
      .toBuffer()

    pngBuffers.push({ size, buf })
  }

  const count = pngBuffers.length
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(count, 4)

  const dirEntries = []
  let offset = 6 + 16 * count

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(item.size === 256 ? 0 : item.size, 0)
    entry.writeUInt8(item.size === 256 ? 0 : item.size, 1)
    entry.writeUInt8(0, 2)
    entry.writeUInt8(0, 3)
    entry.writeUInt16LE(1, 4)
    entry.writeUInt16LE(32, 6)
    entry.writeUInt32LE(item.buf.length, 8)
    entry.writeUInt32LE(offset, 12)
    dirEntries.push(entry)
    offset += item.buf.length
  }

  const icoBuffer = Buffer.concat([header, ...dirEntries, ...pngBuffers.map((p) => p.buf)])

  fs.writeFileSync(path.join(assetsDir, 'icon.ico'), icoBuffer)
  fs.writeFileSync(path.join(buildDir, 'icon.ico'), icoBuffer)
  console.log(`[OK] assets/icon.ico & build/icon.ico created (${icoBuffer.length} bytes)`)

  const trayBase = await sharp(sourceIconPath)
    .resize(24, 24, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer()

  async function makeTrayIcon(statusColor, filename) {
    const dotSvg = Buffer.from(`
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="5.5" fill="#09090b" />
        <circle cx="25" cy="25" r="4" fill="${statusColor}" />
      </svg>
    `)

    const canvas = await sharp({
      create: {
        width: 32,
        height: 32,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    })
      .composite([
        { input: trayBase, top: 4, left: 4 },
        { input: dotSvg, top: 0, left: 0 },
      ])
      .png()
      .toBuffer()

    fs.writeFileSync(path.join(assetsDir, filename), canvas)
    console.log(`[OK] assets/${filename} created (32x32 PNG)`)
  }

  await makeTrayIcon('#10B981', 'tray-connected.png')
  await makeTrayIcon('#EF4444', 'tray-disconnected.png')
  await makeTrayIcon('#F59E0B', 'tray-unconfigured.png')

  const plainTray = await sharp({
    create: {
      width: 32,
      height: 32,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: trayBase, top: 4, left: 4 }])
    .png()
    .toBuffer()
  fs.writeFileSync(path.join(assetsDir, 'tray-icon.png'), plainTray)

  console.log('[DONE] All Scan&Print desktop and tray icons successfully generated!')
}

generateAll().catch(console.error)
