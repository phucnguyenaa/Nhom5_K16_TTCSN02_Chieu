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
exports.giohang = (req, res) => {
  connect.query(
    `SELECT books.id,books.tenbook,books.giabook,count(books.tenbook) as slg from ql.orders inner join ql.books on books.tenbook=orders.tenbook where ten="${req.query.ten}" group by books.tenbook,books.giabook`,
    (err, book) => {
      console.log(book);
      res.render("giohang", {
        mascots: book,
      });
      //, {
      //mascots: mascots,
      //}
    }
  );
};
