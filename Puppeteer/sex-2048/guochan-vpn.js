const puppeteer = require("puppeteer");
// import * as puppeteer from "puppeteer";

// /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
// /Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge

const optionsLaunch = {
    headless: false,
    devtools: false,
    defaultViewport: {
        width: 1200,
        height: 900
    },
    slowMo: 250,
    timeout: 0,
    // product: "chrome",
    ignoreHTTPSErrors: true,
    ignoreDefaultArgs: ["--enable-automation"],
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

// 12-12
let pageUrl = "https://hjd2048.com/2048/thread.php";
let pageSize = 126;
let pageStart = 1;

const initBrowser = async () => {
    // await page.evaluateOnNewDocument(() => {
    //     Object.defineProperty(navigator, 'webdriver', { get: () => false });
    // });
    for (let i = pageStart; i <= pageSize; i++) {
        const browser = await puppeteer.launch(optionsLaunch);
        const page = await browser.newPage();
        console.log(i);
        await page.goto(pageUrl + `?fid-15-page-${i}.html`, optionsPage);
        await getData(page, browser, i);
        await browser.close();
    }
}

const getData = async (page, browser, index) => {
    await page.waitForSelector("#ajaxtable");
    let listLength = await page.$$eval("#ajaxtable > tbody:nth-child(2) > tr.tr3", el => el.length);
    let start = 1;
    if (index === 1) {
        start = 10;
    }
    for (let i = start; i <= listLength; i++) {
        const pageDetail = await browser.newPage();
        try {
            let linkHref = await page.$eval(`#ajaxtable > tbody:nth-child(2) > tr:nth-child(${i}) > td:nth-child(2) > a`, el => el.href);
            await pageDetail.goto(linkHref, optionsPage);
            let downHref = await pageDetail.$$eval("#read_tpc > a", el => {
                for (let j = 0; j < el.length; j++) {
                    if (el[j].getAttribute("href").includes("down.dataaps")) {
                        return el[j].getAttribute("href");
                    }
                }
            });
            await pageDetail.goto(downHref, optionsPage);
            await pageDetail.click("body > div > div.uk-container.uk-container-center.uk-text-center.hashinfo > div > div > div > div.uk-width-1-1.uk-text-center.dlboxbg > a:nth-child(2)");
            await pageDetail.close();
        } catch(e) {
            await pageDetail.close();
            continue;
        }
        await page.waitFor(3000);
    }
}
