import printerManager from './services/printerManager.js'
import logger from './utils/logger.js'

async function runTest() {
  logger.box('TESTING LOCAL WINDOWS PRINTER QUERY', [
    'Scanning Windows Print Spooler (CIM/WMI)',
    'Environment: ES Modules Node.js',
  ])

  const printers = await printerManager.getAvailablePrinters()
  logger.info('TestPrint', `Found ${printers.length} installed printer(s) on this system`)
  
  if (printers.length > 0) {
    console.table(printers)
  } else {
    logger.warn('TestPrint', 'No local or network printers found on Windows Spooler.')
  }

  const defaultPrinter = await printerManager.getDefaultPrinter()
  if (defaultPrinter) {
    logger.success('TestPrint', `System Default Hardware Printer: ${defaultPrinter}`)
  } else {
    logger.warn('TestPrint', 'No system default printer detected.')
  }
}

runTest()