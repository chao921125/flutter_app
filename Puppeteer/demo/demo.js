/**
 * 全局引入包
 */
const puppeteer = require('puppeteer');

/**
 * 启动入口
 */
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    // other actions...
    // await browser.close();
  })();
