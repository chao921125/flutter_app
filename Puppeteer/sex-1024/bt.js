const puppeteer = require("puppeteer");
// import * as puppeteer from "puppeteer";

// /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
// /Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge

const optionsLaunch = {
    headless: false,
    devtools: true,
    defaultViewport: {
        width: 1200,
        height: 900
    },
    slowMo: 250,
    timeout: 0,
    product: "chrome",
    // channel: "chrome",
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
};

;(async () => {
    await initBrowser();
})().catch(async error => {
    await initBrowser();
});

let pageSize = 1;
let pageUrl = "https://www.gushici.net/shici/"; // index_2.html
let pageNext = false;
const breakNum = 2; // 101

const initBrowser = async () => {
    const browser = await puppeteer.launch(optionsLaunch);
    const page = await browser.newPage();
    for (let i = 0; i < pageSize; i++, pageSize++) {
        if (i === 0) {
            await page.goto(pageUrl);
            await getData(page);
        } else if (pageSize === breakNum) {
            await browser.close();
            break;
        } else {
            await page.goto(pageUrl + `index_${pageSize}.html`);
            await getData(page);
        }
    }
    // await browser.close();
}

const getData = async (page) => {
    await page.waitForSelector("body > div.main > div.left > div.gushici");
    // let divArray = await page.$$("body > div.main > div.left > div.gushici");

    let divLength = await page.$$eval("body > div.main > div.left > div.gushici", el => el.length);
    for (let i = 2; i <= divLength+1; i++) {
        const title = await page.$eval(`body > div.main > div.left > div.gushici:nth-child(${i}) > div.gushici-box > p.tit > a > b`, el => el.innerText);
        const dynasty = await page.$eval(`body > div.main > div.left > div.gushici:nth-child(${i}) > div.gushici-box > p.source > a:nth-child(1)`, el => el.innerText);
        const person = await page.$eval(`body > div.main > div.left > div.gushici:nth-child(${i}) > div.gushici-box > p.source > a:nth-child(3)`, el => el.innerText);
        const text = await page.$eval(`body > div.main > div.left > div.gushici:nth-child(${i}) > div.gushici-box > div.gushici-box-text`, el => el.innerText);
        console.log(title);
        console.log(person + ": " + dynasty);
        console.log(text);
        console.log(" \n ");
    }
}
