import fs from 'fs'
import path from 'path'
import os from 'os'
import { PDFDocument, degrees } from 'pdf-lib'
import {
  detectPdfOrientation,
  resolveDuplexSide,
  normalizePaperSize,
} from './services/printService.js'
import {
  calculateJobAmountFromShopRates,
  normalizeJobRecord,
} from './services/statsService.js'

let passedCount = 0
let failedCount = 0

function assert(condition, message) {
  if (condition) {
    console.log(`  \x1b[32m✓ [PASS]\x1b[0m ${message}`)
    passedCount++
  } else {
    console.error(`  \x1b[31m✗ [FAIL]\x1b[0m ${message}`)
    failedCount++
  }
}

async function createTestPdf(filePath, pagesConfig) {
  const pdfDoc = await PDFDocument.create()
  for (const cfg of pagesConfig) {
    const page = pdfDoc.addPage([cfg.width, cfg.height])
    if (cfg.rotation) {
      page.setRotation(degrees(cfg.rotation))
    }
  }
  const bytes = await pdfDoc.save()
  fs.writeFileSync(filePath, bytes)
}

async function runTestSuite() {
  const testDir = path.join(os.tmpdir(), `scanandprint-test-${Date.now()}`)
  fs.mkdirSync(testDir, { recursive: true })

  console.log('\n======================================================================')
  console.log('   SCAN&PRINT AUTOMATED TEST: ORIENTATION, DUPLEX & DB STATS ENGINE')
  console.log('======================================================================\n')

  try {
    console.log('\x1b[36m[SUITE 1] PDF Physical Dimensions & Page-Size Orientation Detection\x1b[0m')

    const testCases = [
      { name: 'A4 Portrait (595.28 x 841.89)', pages: [{ width: 595.28, height: 841.89 }], expected: 'portrait' },
      { name: 'A4 Landscape (841.89 x 595.28)', pages: [{ width: 841.89, height: 595.28 }], expected: 'landscape' },
      { name: 'A3 Portrait (841.89 x 1190.55)', pages: [{ width: 841.89, height: 1190.55 }], expected: 'portrait' },
      { name: 'A3 Landscape (1190.55 x 841.89)', pages: [{ width: 1190.55, height: 841.89 }], expected: 'landscape' },
      { name: 'US Letter Portrait (612 x 792)', pages: [{ width: 612, height: 792 }], expected: 'portrait' },
      { name: 'US Letter Landscape (792 x 612)', pages: [{ width: 792, height: 612 }], expected: 'landscape' },
      { name: '4x6 Photo Portrait (288 x 432)', pages: [{ width: 288, height: 432 }], expected: 'portrait' },
      { name: '4x6 Photo Landscape (432 x 288)', pages: [{ width: 432, height: 288 }], expected: 'landscape' },
      { name: 'A4 Portrait with /Rotate 90 -> Effective Landscape', pages: [{ width: 595.28, height: 841.89, rotation: 90 }], expected: 'landscape' },
      { name: 'A4 Portrait with /Rotate 270 -> Effective Landscape', pages: [{ width: 595.28, height: 841.89, rotation: 270 }], expected: 'landscape' },
      { name: 'A4 Portrait with /Rotate 180 -> Effective Portrait', pages: [{ width: 595.28, height: 841.89, rotation: 180 }], expected: 'portrait' },
      { name: 'A4 Landscape with /Rotate 90 -> Effective Portrait', pages: [{ width: 841.89, height: 595.28, rotation: 90 }], expected: 'portrait' },
      {
        name: 'Multi-Page: 3 Landscape + 1 Portrait -> Majority Landscape',
        pages: [
          { width: 841.89, height: 595.28 },
          { width: 841.89, height: 595.28 },
          { width: 841.89, height: 595.28 },
          { width: 595.28, height: 841.89 },
        ],
        expected: 'landscape',
      },
      {
        name: 'Multi-Page: 3 Portrait + 1 Landscape -> Majority Portrait',
        pages: [
          { width: 595.28, height: 841.89 },
          { width: 595.28, height: 841.89 },
          { width: 595.28, height: 841.89 },
          { width: 841.89, height: 595.28 },
        ],
        expected: 'portrait',
      },
    ]

    for (let i = 0; i < testCases.length; i++) {
      const tc = testCases[i]
      const file = path.join(testDir, `test_page_${i}.pdf`)
      await createTestPdf(file, tc.pages)
      const detected = await detectPdfOrientation(file)
      assert(detected === tc.expected, `${tc.name} -> detected "${detected}", expected "${tc.expected}"`)
    }

    console.log('\n\x1b[36m[SUITE 2] Duplex Flip Edge Resolution for Landscape & Portrait\x1b[0m')

    assert(resolveDuplexSide({ isDuplex: true }, 'landscape') === 'duplexshort', 'Landscape + isDuplex:true -> duplexshort')
    assert(resolveDuplexSide({ duplex: true }, 'landscape') === 'duplexshort', 'Landscape + duplex:true -> duplexshort')
    assert(resolveDuplexSide({ printSides: 'DOUBLE' }, 'landscape') === 'duplexshort', 'Landscape + printSides:DOUBLE -> duplexshort')
    assert(resolveDuplexSide({ duplex: { enabled: true, flip: 'long' } }, 'landscape') === 'duplexlong', 'Landscape + duplex.flip:long -> duplexlong')
    assert(resolveDuplexSide({ duplex: { enabled: true, flip: 'short' } }, 'landscape') === 'duplexshort', 'Landscape + duplex.flip:short -> duplexshort')
    assert(resolveDuplexSide({ isDuplex: true, duplexFlip: 'short' }, 'landscape') === 'duplexshort', 'Landscape + duplexFlip:short -> duplexshort')
    assert(resolveDuplexSide({ isDuplex: true, duplexFlip: 'long' }, 'landscape') === 'duplexlong', 'Landscape + duplexFlip:long -> duplexlong')
    assert(resolveDuplexSide({ isDuplex: true }, 'portrait') === 'duplexlong', 'Portrait + isDuplex:true -> duplexlong')
    assert(resolveDuplexSide({ duplex: true }, 'portrait') === 'duplexlong', 'Portrait + duplex:true -> duplexlong')
    assert(resolveDuplexSide({ duplex: { enabled: true, flip: 'long' } }, 'portrait') === 'duplexlong', 'Portrait + duplex.flip:long -> duplexlong')
    assert(resolveDuplexSide({ duplex: { enabled: true, flip: 'short' } }, 'portrait') === 'duplexshort', 'Portrait + duplex.flip:short -> duplexshort')
    assert(resolveDuplexSide({ isDuplex: false }, 'landscape') === 'simplex', 'Landscape + isDuplex:false -> simplex')
    assert(resolveDuplexSide({ isDuplex: false }, 'portrait') === 'simplex', 'Portrait + isDuplex:false -> simplex')
    assert(resolveDuplexSide({ side: 'duplexshort' }, 'portrait') === 'duplexshort', 'Explicit side:duplexshort preserved')
    assert(resolveDuplexSide({ side: 'duplexlong' }, 'landscape') === 'duplexlong', 'Explicit side:duplexlong preserved')

    console.log('\n\x1b[36m[SUITE 3] Paper Size Normalization for Physical Spooler\x1b[0m')

    assert(normalizePaperSize('4x6') === '10x15cm', 'Paper "4x6" normalizes to "10x15cm"')
    assert(normalizePaperSize('4*6') === '10x15cm', 'Paper "4*6" normalizes to "10x15cm"')
    assert(normalizePaperSize('4x6 in') === '10x15cm', 'Paper "4x6 in" normalizes to "10x15cm"')
    assert(normalizePaperSize('5x7') === '13x18cm', 'Paper "5x7" normalizes to "13x18cm"')
    assert(normalizePaperSize('A4') === 'A4', 'Paper "A4" remains "A4"')
    assert(normalizePaperSize('A3') === 'A3', 'Paper "A3" remains "A3"')

    console.log('\n\x1b[36m[SUITE 4] Shop DB Rate & Print Job Normalization\x1b[0m')

    const mockShopProfile = {
      shopCode: 'PRINT101',
      bwRate: 3,
      colorRate: 10,
      pricingSettings: {
        duplexEnabled: true,
        duplexExtraRate: 1,
      },
    }

    const explicitAmt = calculateJobAmountFromShopRates({ totalAmount: 45, totalPages: 5, copies: 1 }, mockShopProfile)
    assert(explicitAmt === 45, `Explicit DB totalAmount (45) is preserved -> ${explicitAmt}`)

    const computedBwAmt = calculateJobAmountFromShopRates(
      { totalPages: 4, copies: 2, colorType: 'BLACK_AND_WHITE' },
      mockShopProfile
    )
    assert(computedBwAmt === 24, `4 B&W pages x 2 copies @ ₹3/p -> ₹${computedBwAmt} (expected ₹24)`)

    const normalized = normalizeJobRecord(
      {
        jobId: 'JOB_999',
        totalPages: 5,
        copies: 3,
        colorType: 'COLOR',
        paymentMethod: 'ONLINE_UPI',
      },
      mockShopProfile
    )
    assert(normalized.pagesPrinted === 15, `5 pages x 3 copies -> pagesPrinted=${normalized.pagesPrinted} (expected 15)`)
    assert(normalized.colorPagesPrinted === 15, `Color pages printed=${normalized.colorPagesPrinted} (expected 15)`)
    assert(normalized.totalAmount === 150, `Calculated amount @ ₹10/p -> ₹${normalized.totalAmount} (expected ₹150)`)
  } finally {
    try {
      fs.rmSync(testDir, { recursive: true, force: true })
    } catch {
      // Ignore cleanup error
    }
  }

  console.log('\n======================================================================')
  console.log(`TEST RESULTS: ${passedCount} PASSED, ${failedCount} FAILED`)
  console.log('======================================================================\n')

  if (failedCount > 0) {
    process.exit(1)
  }
}

runTestSuite().catch((err) => {
  console.error('Test Suite encountered fatal error:', err)
  process.exit(1)
})
