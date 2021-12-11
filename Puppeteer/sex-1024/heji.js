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

;(async () => {
    await initBrowser();
})().catch(async error => {
    await initBrowser();
});

// 12-08
let pageUrl = "https://m2.5y1rsxmzh.com/pw/thread.php?fid=3";
let pageSize = 305;
let isClose = false;

const initBrowser = async () => {
    // await page.evaluateOnNewDocument(() => {
    //     Object.defineProperty(navigator, 'webdriver', { get: () => false });
    // });
    const browser = await puppeteer.launch(optionsLaunch);
    const page = await browser.newPage();
    for (let i = 1; i <= pageSize; i++) {
        console.log(i);
        await page.goto(pageUrl + `&page=${i}`);
        await getData(page, browser, i);
        // await browser.close();
    }
}

const getData = async (page, browser, index) => {
    await page.waitForSelector("#ajaxtable");
    let listLength = await page.$$eval("#ajaxtable > tbody:nth-child(2) > tr.tr3", el => el.length);
    let start = 1;
    if (index === 1) {
        start = 11;
    }
    for (let i = start; i <= listLength; i++) {
        const pageDetail = await browser.newPage();
        try {
            let content = await page.$eval(`#ajaxtable > tbody:nth-child(2) > tr:nth-child(${i}) > td:nth-child(2) > h3 > a`, el => el.innerText);
            if (content.includes("國產") || content.includes("国产")) {
                let linkLength = await page.$$eval("#read_tpc > a", el => el.length);
                for (let j = 1; j <= linkLength; j++) {
                    let linkHref = await page.$eval(`#read_tpc > a:nth-child(${j})`, el => el.href);
                    console.log(linkHref);
                    // let linkHref = await page.$eval(`#ajaxtable > tbody:nth-child(2) > tr:nth-child(${i}) > td:nth-child(2) > h3 > a`, el => el.href);
                    // await pageDetail.goto(linkHref);
                    // let downHref = await pageDetail.$eval("#read_tpc > a", el => el.href);
                    // await pageDetail.goto(downHref);
                    // await pageDetail.click("body > div.tm-section.tm-section-color-1.tm-section-colored > div.uk-container.uk-container-center.uk-text-center.hashinfo > div.uk-width-medium-8-10.uk-width-1-1.uk-container-center.uk-text-center > div > div.uk-width-1-1.uk-text-center.dlboxbg > a:nth-child(1)");
                    // pageDetail.close();
                }
                // let pageSizeAll = await browser.pages();
                // if (pageSizeAll.length > 4) {
                //     for (let j = 3; j <= pageSizeAll.length; j++) {
                //         pageSizeAll[j].close();
                //     }
                // }
            } else {
                continue;
            }
        } catch(e) {
            // pageDetail.close();
            continue;
        }
    }
}
