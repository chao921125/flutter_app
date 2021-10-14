const puppeteer = require("puppeteer");
const mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "huangchao",
    database: 'test_node'
});

// 声明全局变量
const urlHead = "https://m2.5y1rsxmzh.com/pw/";
// /Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge
// /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
const optionsLaunch = {
  headless: false,
  defaultViewport: {
    width: 1200,
    height: 900
  },
  slowMo: 250,
  timeout: 0,
  executablePath: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"
}

// 主函数调用
;(async () => {
  createBrowser();
})().catch(error => {
  createBrowser();
});

async function createBrowser() {
  const indexBrowser = await puppeteer.launch(optionsLaunch);

  connection.connect();
  let getSql = 'SELECT url FROM `test_node`.`1024`';
  let getSqlParams = [];
  let promise = new Promise((resolve, reject) => {
    connection.query(getSql, getSqlParams, function (err, result) {
      if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
      }        
    resolve(result);
    });
  })
  connection.end();

  promise.then((value) => {
    downloadFile(indexBrowser, value);
  })
}

async function downloadFile(indexBrowser, trs) {
  for(let u of trs) {
    const ctPage = await indexBrowser.newPage();
    ctPage.setDefaultNavigationTimeout(0);
    await ctPage.goto(urlHead + u.url);
    await ctPage.mainFrame().addScriptTag({
      url: "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    });
    await ctPage.waitFor("#read_tpc");
    let downloadUrlStr = "";
    const url1 = await ctPage.$("#read_tpc > a");
    const url9 = await ctPage.$("#read_tpc > a:nth-child(9)");
    const url14 = await ctPage.$("#read_tpc > a:nth-child(14)");
    if (url1) { downloadUrlStr = "#read_tpc > a"; }
    if (url9) { downloadUrlStr = "#read_tpc > a:nth-child(9)"; }
    if (url14) { downloadUrlStr = "#read_tpc > a:nth-child(14)"; }
    const downloadUrl = await ctPage.$eval(downloadUrlStr, e => e.href);
    if(downloadUrl) {
      await ctPage.goto(downloadUrl);
      await ctPage.waitFor("body > div.tm-section.tm-section-color-1.tm-section-colored > div.uk-container.uk-container-center.uk-text-center.hashinfo > div.uk-width-medium-8-10.uk-width-1-1.uk-container-center.uk-text-center > div > div.uk-width-1-1.uk-text-center.dlboxbg");
      // await ctPage.waitFor("div.dlboxbg a:last-child");
      // const clickHerf = await ctPage.$("body > div.tm-section.tm-section-color-1.tm-section-colored > div.uk-container.uk-container-center.uk-text-center.hashinfo > div.uk-width-medium-8-10.uk-width-1-1.uk-container-center.uk-text-center > div > div.uk-width-1-1.uk-text-center.dlboxbg > a:nth-child(2)");
      ctPage.click("body > div.tm-section.tm-section-color-1.tm-section-colored > div.uk-container.uk-container-center.uk-text-center.hashinfo > div.uk-width-medium-8-10.uk-width-1-1.uk-container-center.uk-text-center > div > div.uk-width-1-1.uk-text-center.dlboxbg > a:nth-child(2)");


    // connection.connect();
    // let delSql = 'DELETE FROM `test_node`.`1024` WHERE `url` = ?';
    // let delParmas = [u.url];
    // connection.query(delSql, delParmas, function (err, result) {
    //   if(err){
    //   console.log('[INSERT ERROR] - ',err.message);
    //   return;
    //   }        
    //   console.log('--------------------------INSERT----------------------------');
    //   console.log('INSERT ID:',result);        
    //   console.log('-----------------------------------------------------------------\n\n');  
    // });
    // connection.end();
    }
    await ctPage.waitFor(10000);
    ctPage.close();
  }
}
