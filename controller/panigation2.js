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
exports.panigation2 = (req, res) => {
  connect.query("SELECT * from books LIMIT 9 OFFSET 10 ", (err, book) => {
    if (req.cookies.ten) {
      const user = {
        ten: req.cookies.ten,
        mk: req.cookies.mk,
      };
      res.render("pagelogin", {
        gain: 10,
        user,
        mascots: book,
      });
    }
    console.log(book);
    res.render("overviewp", {
      gain: 10,
      mascots: book,
    });
    //, {
    //mascots: mascots,
    //}
  });
};
