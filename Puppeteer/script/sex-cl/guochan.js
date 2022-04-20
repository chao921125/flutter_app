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
    // slowMo: 250,
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

// 2022 03-27 03-14 1638 
// https://t66y.com/thread0806.php?fid=25
let pageUrl = "https://cl.912x.xyz/thread0806.php?fid=25";
let pageSize = 60;
let pageStart = 1;
let tempPage = 0;

const initBrowser = async () => {
    // await page.evaluateOnNewDocument(() => {
    //     Object.defineProperty(navigator, 'webdriver', { get: () => false });
    // });
    try {
        // for (let i = pageStart; i <= pageSize; i++) {
        for (let i = pageSize; i >= pageStart; i--) {
            const browser = await puppeteer.launch(optionsLaunch);
            const page = await browser.newPage();
            await page.evaluateOnNewDocument("() => { Object.defineProperties(navigator,{ webdriver: { get: () => false } }) }");
            console.log(i);
            await page.goto(pageUrl + `&search=&page=${i}`, optionsPage);
            await getData(page, browser, i);
            await page.waitForTimeout(Math.ceil(Math.random() * 2 + 1) * 1000);
            await browser.close();
        }
    } catch (error) {
        pageSize = tempPage;
        await initBrowser();
    }
}

const getData = async (page, browser, index) => {
    await page.waitForSelector("#tbody");
    let listLength = await page.$$eval("#tbody > tr", el => el.length);
    let start = 1;
    if (index === 1) {
        start = 11;
    }
    for (let i = start; i <= listLength; i++) {
        const pageDetail = await browser.newPage();
        try {
            let linkHref = await page.$eval(`#tbody > tr:nth-child(${i}) > td:nth-child(2) > h3 > a`, el => el.href);
            await pageDetail.goto(linkHref, optionsPage);
            let downHref = await pageDetail.$$eval("#main div.t.t2 table tbody tr.tr1.do_not_catch th:nth-child(2) table tbody tr td div.tpc_content.do_not_catch a", el => {
                for (let j = 0; j < el.length; j++) {
                    if (el[j].getAttribute("href").includes("link.php")) {
                        return el[j].getAttribute("href");
                    }
                }
            });
            console.log(downHref);
            await pageDetail.goto(downHref, optionsPage);
            await pageDetail.waitForTimeout(Math.ceil(Math.random() * 2 + 1) * 1000);
            await pageDetail.waitForSelector("body > form > table > tbody > tr:nth-child(2) > td > li > ul > button:nth-child(6)");
            await pageDetail.click("body > form > table > tbody > tr:nth-child(2) > td > li > ul > button:nth-child(6)");
            await pageDetail.waitForTimeout(Math.ceil(Math.random() * 2 + 1) * 1000);
            await pageDetail.close();
        } catch(e) {
            await pageDetail.close();
            continue;
        }
        await page.waitForTimeout(Math.ceil(Math.random() * 2 + 1) * 1000);
    }
}
