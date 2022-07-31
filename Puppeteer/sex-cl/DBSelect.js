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

// 2022 05-20
let pageSize = 1;
let pageStart = 1;
let tempPage = 0;


const initBrowser = async () => {
    const browser = await puppeteer.launch(optionsLaunch);
    while(pageSize > 0) {
        let getSql = 'SELECT id, downloadURL FROM `demo`.`sex-cl` LIMIT 1';
        let getSqlParams = [];
        connection.query(getSql, [getSqlParams], function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }        
            console.log('--------------------------SELECT----------------------------');
            console.log('SELECT ID:',result);
            if (result && result.length > 0) {
                getData(browser, result[0].id, result[0].downloadURL);
            }
            console.log('-----------------------------------------------------------------\n\n'); 
        });
        
        pageSize--;
    }
}

const getData = async (browser, id, downHref) => {
    const pageDetail = await browser.newPage();
    try {
        await pageDetail.goto(downHref, optionsPage);
        await pageDetail.waitForSelector("body > form > table > tbody > tr:nth-child(2) > td > li > ul > button:nth-child(6)");
        await pageDetail.click("body > form > table > tbody > tr:nth-child(2) > td > li > ul > button:nth-child(6)");
        console.log("success", downHref);
        delDataId(id);
        await pageDetail.waitForTimeout(Math.ceil(Math.random() * 2 + 1) * 1000);
        await pageDetail.close();
    } catch(e) {
        await pageDetail.close();
    }
}

const delDataId = (id) => {
    let delSql = 'DELETE FROM `demo`.`sex-cl` WHERE id = ?';
    let delSqlParams = [id];
    const arr = connection.query(delSql, [delSqlParams], function (err, result) {
        if(err){
            console.log('[DELETE ERROR] - ',err.message);
            return;
        }        
        console.log('--------------------------DELETE----------------------------');
        console.log('DELETE ID:',result);        
        console.log('-----------------------------------------------------------------\n\n'); 
    });
}
