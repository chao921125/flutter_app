document.querySelector("#normalthread_2438491 > tr > th > a.s.xst")
// http://thzthzthz.cc/thread-213795-x-1.html
http://thzthzthz.cc/forum-60-x.html

document.querySelector("#pid22969610 > tbody > tr:nth-child(1) > td.plc > div.pct > div > div.t_fsz > table > tbody > tr")
document.querySelector("#attach_561784 > a")
// torrent


document.querySelector("#fwin_content_imc_attachad > div > div:nth-child(3) > div:nth-child(2) > a")

const puppeteer = require("puppeteer");
const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "huangchao",
    database: 'test_node'
});
connection.connect();

// 声明全局变量
// /Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge
// /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
const optionsLaunch = {
  headless: true,
  defaultViewport: {
    width: 1200,
    height: 900
  },
  slowMo: 250,
  timeout: 0
  // executablePath: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"
}

// 主函数调用
;(async () => {
  createBrowser();
})().catch(error => {
  createBrowser();
});

let pageNum = 26;
async function createBrowser() {
  const indexBrowser = await puppeteer.launch(optionsLaunch);
  const indexPage = await indexBrowser.newPage();
  downloadFile(indexBrowser, indexPage, pageNum);
}
async function downloadFile(indexBrowser, indexPage, i) {
  // http://www.b5bac289d3ed.com/index/home.html
  // https://31maoak.com/index.html
  const urlHead = "https://www.37a6d8e7b783.com";
  indexPage.setDefaultNavigationTimeout(0);
  await indexPage.goto(urlHead + "/shipin/list-%E5%9B%BD%E4%BA%A7%E7%B2%BE%E5%93%81-" + i + ".html");// 2020-08-19 313
  await indexPage.mainFrame().addScriptTag({
    url: "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
  });

  // await indexPage.waitForSelector("#main-container");
  let trs = await indexPage.evaluate(() => {
      let arrays = [];
      $("#main-container > div.text-list-html > div.video-box > ul > li").each(function() {
          if($(this).find("a.video-pic").attr("href")) {
              let obj = {
                url: $(this).find("a.video-pic").attr("href"),
                title: $(this).find("a.video-pic").attr("title"),
              };
              arrays.push(obj);
          }
      })
      return arrays;
  })
  if (trs.length > 0) {
    let addSqlParams = [];
    for (let urlOne of trs) {
        await indexPage.goto(urlHead + urlOne.url);
        // await indexPage.waitForSelector(".app_hides");
        let downloadArr = await indexPage.evaluate(() => {
          let arrays = [];
          if($(this).find("#lin1k0")) {
            arrays.push($("#lin1k0").val());
            arrays.push($("#lin1k1").val());
          }
          return arrays;
        })
        downloadArr.push(urlOne.title);
        addSqlParams.push(downloadArr);
    }
    if (addSqlParams !== []) {
      let addSql = 'INSERT INTO `test_node`.`maomi`(`url`,`turl`,`title`) VALUES ?';
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
  }

  if(pageNum > 0) {
    pageNum--;
    console.log(pageNum);
    if (pageNum >= 1) {
      downloadFile(indexBrowser, indexPage, pageNum);
    }
  } else {
    connection.end();
    indexBrowser.close();
  }
}
