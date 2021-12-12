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
    for (let i = 1; i <= pageSize; i++) {
        const browser = await puppeteer.launch(optionsLaunch);
        const page = await browser.newPage();
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
                let linkHref = await page.$eval(`#ajaxtable > tbody:nth-child(2) > tr:nth-child(${i}) > td:nth-child(2) > h3 > a`, el => el.href);
                await pageDetail.goto(linkHref);
                let downHrefArr = await pageDetail.$$eval("#read_tpc > a", el => {
                    let hrefArr = [];
                    for (let j = 0; j < el.length; j++) {
                        hrefArr.push(el[j].getAttribute("href"));
                    }
                    return hrefArr;
                });
                for (const downHref of downHrefArr) {
                    const pageDownload = await browser.newPage();
                    await pageDownload.goto(downHref);
                    await pageDownload.click("body > div.tm-section.tm-section-color-1.tm-section-colored > div.uk-container.uk-container-center.uk-text-center.hashinfo > div.uk-width-medium-8-10.uk-width-1-1.uk-container-center.uk-text-center > div > div.uk-width-1-1.uk-text-center.dlboxbg > a:nth-child(1)");
                    await pageDownload.close();
                }
                await pageDetail.close();
            } else {
                await pageDetail.close();
                continue;
            }
        } catch(e) {
            await pageDetail.close();
            continue;
        }
    }
}
