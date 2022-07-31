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

// 2022 01-01
let pageUrl = "http://thzthzthz.cc/";
let pageSize = 1;
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
            console.log(i);
            await page.goto(pageUrl + `forum-60-${i}.html`, optionsPage);
            await getData(page, browser, i);
            await browser.close();
        }
    } catch (error) {
        pageSize = tempPage;
        await initBrowser();
    }
}

const getData = async (page, browser, index) => {
    await page.waitForSelector("#threadlisttableid");
    let listLength = await page.$$eval("#threadlisttableid > tbody", el => el.length);
    let start = 1;
    if (index === 1) {
        start = 3;
    }
    for (let i = start; i <= listLength; i++) {
        const pageDetail = await browser.newPage();
        try {
            let linkHref = await page.$eval(`#threadlisttableid > tbody:nth-child(${i}) > tr:nth-child(1) > td:nth-child(1) > a`, el => el.href);
            await pageDetail.goto(linkHref, optionsPage);
            // let downHref = await pageDetail.$eval("#read_tpc > a", el => {
            //     let hrefArr = [];
            //     for (let j = 0; j < el.length; j++) {
            //         if (el[j].getAttribute("href").includes("torrent")) {
            //             hrefArr.push(el[j].getAttribute("href"));
            //         }
            //     }
            //     return hrefArr;
            // });
            let downHref = await page.$eval(`#postlist div.pct div.t_fsz table tr td.t_f a`, el => el.href);
            await pageDetail.goto(downHref, optionsPage);
            await pageDetail.click("body > div.uk-container-center.uk-container > div > div > div > div > div > div.uk-text-center.uk-margin-large-top.uk-margin-bottom > div:nth-child(4) > div > a");
            await pageDetail.close();
        } catch(e) {
            await pageDetail.close();
            continue;
        }
        await page.waitForTimeout(3000);
    }
}
