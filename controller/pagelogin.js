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
exports.pagelogin = (req, res) => {
  connect.query("SELECT * from books LIMIT 10 OFFSET 0", (err, book) => {
    user = {
      ten: req.query.ten,
    };
    console.log("11");
    res.render("pagelogin", {
      gain: 0,
      user,
      mascots: book,
    });
  });
};
