const mysql2 = require("mysql2");
const app = require("./app");
app.listen(3000, () => {
  console.log("isten on 3001...");
});
// exports.connect = () => {
//   const connect = mysql2.createConnection({
//     host: "localhost",
//     port: "3306",
//     user: "root",
//     password: "phuc1234",
//     database: "ql",
//   });
//   connect.connect((err, connect) => {
//     if (!err) {
//       console.log("seceedd..");
//     } else {
//       console.log(err);
//     }
//   });
//   return connect;
// };
// connect.query("SELECT * FROM ql.book;", (err, results) => {
//   console.log(results);
// });
// module.exports = connect;
