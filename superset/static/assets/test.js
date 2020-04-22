
const mysql = require("mysql");
//left here for testing purposes, although there is only one colour in DB
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "shiganglabelmodels",
    port: 3306
  });


function get_info(callback){
    var sql = 'SELECT DISTINCT InstrName from vibrationsdetail';
    connection.query(sql, function(err, results){
          if (err){ 
            throw err;
          }
          //console.log(results[0].InstrName); // good
          //stuff_i_want = results[0].InstrName;  // Scope is larger than function

          return callback(results[0].InstrName);
  })
}

stuff_i_want = '';

get_info(function(result){
  stuff_i_want = result;
  //rest of your code goes in here
});

// aaa = setTimeout(function(){console.log(stuff_i_want + 'sdfasdf'); return stuff_i_want;},50);
connection.end();

function bbb(){
  console.log(stuff_i_want + 'sdfasdf');
}

bbb()


// function bbb() {
//   var promise = new Promise(function (resolve, reject) {
//   var mysql = require('mysql');
//   var connection = mysql.createConnection({
// //     host: "localhost",
//     user: "root",
//     password: "123456",
//     database: "shiganglabelmodels",
//     port: 3306
//   });
//   connection.connect();
//   connection.query(
//     'SELECT DISTINCT InstrName from vibrationsdetail',
//       function selectCb(err, results) {
//           if (results) {
//               console.log(results);
//               //resolve(results);
//               resolve(results);
//           }
//           if (err) {
//               console.log(err);
//           }
//           connection.end();
//       }
//   );
// });
// promise.then(function (value) {
//   console.log(value);
//   return value;
//   // success
// }, function (value) {
//   // failure
// });
// return promise;
// };

// aa = bbb();
// console.log(aa)



// const { query } = require('./async-db')
// async function selectAllData( ) {
//   let sql = 'SELECT DISTINCT InstrName from vibrationsdetail'
//   let dataList = await query( sql )
//   return dataList
// }


// target = []
// async function getData() {
//   let dataList = await selectAllData()
//   target = dataList
//   return dataList
// }

// getData()
// console.log(target)



// const mysql = require("mysql");

// //left here for testing purposes, although there is only one colour in DB
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "shiganglabelmodels"
// });

// result = [];


// (async () => {
//   connection.connect();
//   result = await getInstrName();
//   console.log(result);
//   connection.end();
// })();

// function getInstrName() {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       'SELECT DISTINCT InstrName from vibrationsdetail',
//       (err, result) => {
//         return err ? reject(err) : resolve(result);
//       }
//     );
//   });
// }
