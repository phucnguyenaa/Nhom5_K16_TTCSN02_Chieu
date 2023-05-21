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
exports.page = (req, res) => {
  connect.query(`SELECT * from books where id=${req.query.id}`, (err, book) => {
    console.log(book);
    [...b] = book;
    res.render("page", {
      b,
    });
  });
};
