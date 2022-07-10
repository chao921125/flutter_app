let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "huangchao",
    database: 'test_node'
});
connection.connect();
// one data let params = [...]; query(sql, params, fn)
// more data let params = [[],[]...]; query(sql, [params], fn)
// let addSql = 'INSERT INTO `test_node`.`1024`(`url`) VALUES ?';
// let addSqlParams = ['https://c.runoob.com'];

// sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
let addSql = 'INSERT INTO `demo`.`sex-cl`(`url`) VALUES ?';
let addSqlParams = [['https://c.runoob.com'], ['https://c2222.com']];
connection.query(addSql, [addSqlParams], function (err, result) {
    if(err){
     console.log('[INSERT ERROR] - ',err.message);
     return;
    }        
   console.log('--------------------------INSERT----------------------------');
   console.log('INSERT ID:',result);        
   console.log('-----------------------------------------------------------------\n\n');  
});

let getSql = 'SELECT * FROM `test_node`.`1024` id = ?';
let getSqlParams = ['2312'];
connection.query(getSql, getSqlParams, function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }

   console.log('--------------------------SELECT----------------------------');
   console.log(result);
   console.log('------------------------------------------------------------\n\n');  
});

connection.end();