const mysql2 = require("mysql2");
const connect = mysql2.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "phuc1234",
  database: "ql",
});
connect.connect((err, connect) => {
  if (!err) {
    // console.log("seceedd..");
  } else {
    console.log(err);
  }
});
exports.signup = (req, res) => {
  connect.query("SELECT * from book", (err, book) => {
    console.log("da truy cap sign in");
    res.render("signup");
  });
};
