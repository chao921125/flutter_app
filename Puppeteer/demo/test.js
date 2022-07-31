const puppeteer = require('puppeteer');

puppeteer.launch({headless: false, ignoreDefaultArgs: ["--enable-automation", "--enable-blink-features"]}).then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://google.com');
//   await browser.close();
});