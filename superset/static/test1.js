
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


async function testAsync() {
    return "hello async";
}

const result = testAsync();
console.log(result);