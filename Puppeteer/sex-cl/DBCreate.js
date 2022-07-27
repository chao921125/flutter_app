const puppeteer = require("puppeteer");

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
    executablePath: "C:\/Program Files (x86)\/Microsoft\/Edge\/Application\/msedge.exe"
};

const optionsPage = {
    timeout: 0,
    waitUntil: "domcontentloaded"
};

let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "huangchao",
    database: 'demo'
});
connection.connect((err) => {
    if (err) {
        console.log("mysql connection ERROR" +  err.stack);
        return false;
    } else {
        console.log("mysql connection SUCCESS");
    }
});

;(async () => {
    await initBrowser();
})().catch(async error => {
    await initBrowser();
});

// 2022 07-17
let pageUrl = "https://t66y.com/thread0806.php?fid=25";
let pageSize = 28;
let pageStart = 1;
let tempPage = 0;

// 翻页
const initBrowser = async () => {
    // await page.evaluateOnNewDocument(() => {
    //     Object.defineProperty(navigator, 'webdriver', { get: () => false });
    // });
        // for (let i = pageStart; i <= pageSize; i++) {
    for (let i = pageSize; i >= pageStart; i--) {
        const browser = await puppeteer.launch(optionsLaunch);

        try {
            const page = await browser.newPage();
            await page.evaluateOnNewDocument("() => { Object.defineProperties(navigator,{ webdriver: { get: () => false } }) }");
            console.log(i);
            await page.goto(pageUrl + `&search=&page=${i}`, optionsPage);
            await getData(page, browser, i);
            await page.waitForTimeout(Math.ceil(Math.random() * 2 + 1) * 1000);
            await browser.close();
        } catch (error) {
            pageSize = tempPage;
            await browser.close();
            await initBrowser();
        }
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
            console.log("page href = ", i, linkHref);
            await pageDetail.goto(linkHref, optionsPage);
            let downHref = await pageDetail.$$eval("#main div.t.t2 table tbody tr.tr1.do_not_catch th:nth-child(2) table tbody tr td div.tpc_content.do_not_catch a", el => {
                for (let j = 0; j < el.length; j++) {
                    if (el[j].getAttribute("href").includes("link.php")) {
                        return el[j].getAttribute("href");
                    }
                }
            });
            console.log("download href = ", i, downHref);
            if (downHref) {
                let addSql = 'INSERT INTO `demo`.`sex-cl`(`pageURL`, `downloadURL`) VALUES ?';
                let addSqlParams = [[linkHref, downHref]];
                connection.query(addSql, [addSqlParams], function (err, result) {
                    if(err){
                    console.log('[INSERT ERROR] - ',err.message);
                    return;
                    }        
                    console.log('--------------------------INSERT----------------------------');
                    console.log('INSERT ID:',result);        
                    console.log('-----------------------------------------------------------------\n\n');  
                });
            }
            if (downHref === undefined) {
                i++;
            }
            await pageDetail.close();
        } catch(e) {
            i--;
            await pageDetail.close();
            continue;
        }
    }
}
