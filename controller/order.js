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
        console.log("seceedd..");
    } else {
        console.log(err);
    }
});
// let a = 0;
exports.order = (req, res) => {
    // a = a + 1;
    // let a = 0;
    // a = a + 1;
    // let b = {
    //   a: a,
    //   ...req.body.body,
    // };
    // console.log(req.body);
    connect.query(
        `select tenbook from books where id=${req.body.body.idbook}`,
        (err, book) => {
            // if(err)=>
            // {
            //   console.log(err);
            // }
            console.log(book[0].tenbook);
            connect.query(
                `insert into  ql.orders (ten,tenbook) values("${req.body.body.ten}","${book[0].tenbook}")`,
                (err) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log("client vua dat hang");
                    res.status(201);
                }
            );
        }
    );
};