import { chromium } from 'playwright'

;(async () => {
  const browser = await chromium.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:5173/')

  await page.evaluate(() => {
    window.performance.mark('START')
  })

  await page.waitForSelector('#posts > li')

  const timing = await page.evaluate(() => {
    window.performance.mark('END')
    window.performance.measure('START-END', 'START', 'END')

    const res = window.performance.getEntriesByType("measure")

    window.performance.clearMarks()
    window.performance.clearMeasures()

    return res
  })
  console.log(timing)

  await page.screenshot({
    path: './screenshot.png',
    fullPage: true,
  })

  await page.close()
  await browser.close()
})()