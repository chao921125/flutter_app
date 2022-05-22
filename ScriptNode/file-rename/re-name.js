'use strict';

var fs = require('fs');
var join = require('path').join;

function getJsonFiles(jsonPath){
    function findJsonFile(path){
        let files = fs.readdirSync(path);
        files.forEach(function (item, index) {
            let sourcePath = join(path, item);
            // let regArr = /\s*【[A-Za-z]*\s*[\u4e00-\u9fa5]*\s*[A-Za-z0-9]*\s*[\u4e00-\u9fa5]*\s*[A-Za-z0-9]*】\s*/ig.exec(item);
            // let regArr = /\d+\.\d+\.\d*，/ig.exec(item);
            // let regArr = /\d+-\d+-\d*/ig.exec(item);
            // let regArr = /^\d+\s+/ig.exec(item);
            // let regArr = /\[(.*?)\]/ig.exec(item);
            // let regArr = /guochan2048.com-/ig.exec(item);
            // let regArr = /bbs2048.org出品@/ig.exec(item);
            // let regArr = /bbs2048.org出品/ig.exec(item);
            // let regArr = /guochan2048.com -/ig.exec(item);
            // let regArr = /2048论坛bbs2048.org@/ig.exec(item);
            // let regArr = /2048论坛jav20s8.com @-/ig.exec(item);
            let regArr = /^，/ig.exec(item);
            
            
            // let regArr = /[\s*]?\(\d\)*/ig.exec(item);
            if (regArr) {
                let reName = item.replace(regArr[0], "");
                let destPath = join(path, reName);
                fs.rename(sourcePath, destPath, (error) => {
                    if (error) {
                      console.log(index, error);
                    } else {
                      console.log(index + ' = ' + reName);
                    }
                });
            }
        });
    }
    findJsonFile(jsonPath);
}
// I:\/MyInfo\/Download
// F:\/MyData\/Download
// F:\/MyData\/PE
// F:\/MyData\/下载工具\/MV\/标题-猫咪
// F:\/MyData\/下载工具\/MV\/标题-偷拍
// F:\/MyData\/下载工具\/MV\/标题-要看
// F:\/MyData\/下载工具\/MV\/标题-自拍
getJsonFiles("/Volumes/System/Puppeteer");