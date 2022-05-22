'use strict';

var fs = require('fs');
var join = require('path').join;
 
function getJsonFiles(jsonPath){
    let jsonFiles = [];
    function findJsonFile(path){
        let files = fs.readdirSync(path);
        files.forEach(function (item, index) {
            let fPath = join(path,item);
            let stat = fs.statSync(fPath);
            if(stat.isDirectory() === true) {
                findJsonFile(fPath);
            }
            if (stat.isFile() === true) { 
              jsonFiles.push(fPath);
              let fileName = fPath.slice(0, fPath.lastIndexOf("."));
              let upFileName = index > 0 ? jsonFiles[index-1].slice(0, jsonFiles[index-1].lastIndexOf(".")) : "";
            //   console.log("now file", fileName);（uun22.com）
            //   console.log("up file", upFileName);
              if ( (upFileName.includes("(1)") && fileName === upFileName.replace("(1)", "").trim()) ||
                    (upFileName.includes("(2)") && fileName === upFileName.replace("(2)", "").trim())  ||
                    (upFileName.includes(" (1)") && fileName === upFileName.replace(" (1)", "").trim())  ||
                    (upFileName.includes(" (2)") && fileName === upFileName.replace(" (2)", "").trim()) ) {
                fs.unlink(fPath, function(err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log("文件删除成功！");
                });
              }
            }
        });
    }
    findJsonFile(jsonPath);
}

getJsonFiles("F:\/MyData\/Download");