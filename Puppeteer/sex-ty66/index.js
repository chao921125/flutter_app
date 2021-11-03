const puppeteer = require("puppeteer");
// 存储数据库使用
const mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "huangchao",
    database: 'test_node'
});
// connection.connect();

// 声明全局变量
let pageNum = 1;
const endDate = "2020-04-08";
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
  // executablePath: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"
}

// 主函数调用
;(async () => {
  createBrowser();
})().catch(error => {
  createBrowser();
});

async function createBrowser() {
  const indexBrowser = await puppeteer.launch(optionsLaunch);
  const indexPage = await indexBrowser.newPage();
  downloadFile(indexBrowser, indexPage, pageNum);
}

async function downloadFile(indexBrowser, indexPage, i) {
  // https://dh.downmz.rocks/
  // https://fj.91dfjh.xyz/pw/
  // https://fj.91dfjh.pw/pw/
  // https://m2.5y1rsxmzh.com/pw/
  // https://m3.b467f5820b7.xyz/pw/
  // http://m2.5y1rsxmzh.club/pw/
  // https://m3.b467f5820b7.xyz/pw/
  const urlHead = "https://m2.5y1rsxmzh.com/pw/";
  indexPage.setDefaultNavigationTimeout(0);
  await indexPage.goto(urlHead + "thread.php?fid=5&page=" + i);
  await indexPage.mainFrame().addScriptTag({
    url: "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
  });
  await indexPage.waitFor("#main > div:nth-child(11) > span.fl > div.pages.cc");
  let relArr = await indexPage.evaluate(() => {
    // let ats = [...document.querySelectorAll("#ajaxtable tr.tr3 a.s8")];
    let addSqlParams = [];
    $("#ajaxtable tr.tr3").each(function() {
      if($(this).find("a.s8").text().includes("国产无码")
       && $(this).find("h3 a").attr("href")
       && (!$(this).find("h3 a").text().includes("合集"))
       && (new Date().getTime($(this).find("td:last").text()) > new Date(endDate).getTime())) {
        let downloadArr = [$(this).find("h3 a").attr("href")];
        addSqlParams.push(downloadArr);
      }
    })
    return addSqlParams;
  })
  if (addSqlParams !== []) {
    let addSql = 'INSERT INTO `test_node`.`1024`(`url`) VALUES ?';
    connection.query(addSql, [relArr], function (err, result) {
      if(err){
      console.log('[INSERT ERROR] - ',err.message);
      return;
      }        
      console.log('--------------------------INSERT----------------------------');
      console.log('INSERT ID:',result);        
      console.log('-----------------------------------------------------------------\n\n');  
    });
  }

  if(pageNum < 699) {
    pageNum++;
    downloadFile(indexBrowser, indexPage, pageNum)
  } else {
    connection.end();
    indexBrowser.close();
  }
}
