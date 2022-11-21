const { chromium, firefox, webkit } = require('playwright');

const optionsLaunch = {
    headless: false,
    devtools: false,
    downloadsPath: "/Users/huangchao/Downloads",
    defaultViewport: {
        width: 1200,
        height: 900
    },
    // slowMo: 250,
    timeout: 0,
    // product: "chrome",
    ignoreHTTPSErrors: true,
    ignoreDefaultArgs: ["--enable-automation", "--enable-blink-features"],
    // channel: "chrome",
    // executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
};
const optionsPage = {
    timeout: 0,
    waitUntil: "domcontentloaded"
};

;(async () => {
    await initBrowser();
})().catch(async error => {
    await initBrowser();
});

let pageUrl = "https://www.metagaia.io/";

const initBrowser = async () => {
    try {
        const browser = await chromium.launch(optionsLaunch);
        const page = await browser.newPage();
        await page.goto(pageUrl + ``, optionsPage);
        await page.waitForSelector("#root");
        console.log(await page.content());
        // const rootHtml = await page.$$eval("#root", el => el);
        // console.log(rootHtml);
        // await page.waitForTimeout(3000);
        // await browser.close();
    } catch (e) {

    }
}
