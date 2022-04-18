const puppeteer = require('puppeteer');

const optionsLaunch = {
  headless: false,
  devtools: false,
  defaultViewport: {
      width: 1200,
      height: 900
  },
  // slowMo: 250,
  timeout: 0,
  // product: "chrome",
  ignoreHTTPSErrors: true,
  ignoreDefaultArgs: ["--enable-automation"],
  // channel: "chrome",
  // executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
};

puppeteer.launch(optionsLaunch).then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://google.com');
//   await browser.close();
});