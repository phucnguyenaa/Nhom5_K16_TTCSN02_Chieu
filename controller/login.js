const appError = require("./error");

const connect = require("mysql2-promise")();
connect.configure({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "phuc1234",
    database: "ql",
});
//express.json va urlencode để user gửi yêu cầu lên thì nó sẽ paser
//thành object req.body chứa cái user gửu lên
exports.login = async(req, res, next) => {
    const { ten, mk } = req.body.body;
    console.log(ten, mk);
    // console.log(req.body);
    // res.json({
    //   data: "ok",
    // });
    // res.console.error();
    if (!ten || !mk) {
        // res.status(404).json({
        //   message: "chua nhap mk tai khoan ",
        // });
        return next(new appError("chua nhap tk mk", 400));
    }
    try {
        const [rows, fields] = await connect.execute(`SELECT ten,mk from taikhoan 
  where ten='${ten}' and mk='${mk}' 
  `);
        console.log("đã truy cập db");
        console.log(rows[0].mk);
        const formattedData = rows.map((obj) => Object.values(obj));
        console.log(formattedData[0]);
        // const binaryRow = rows[0];
        // const imageBuffer = binaryRow.getBinary()[0];
        // console.log(imageBuffer); // prints the binary content of the image column
    } catch (err) {
        return next(new appError("loi truy cap db", 401));
    }
    // if (!user) {
    //   // res.status(404).json({
    //   //   message: "oi truy cap db",
    //   // });
    //   return next(new appError("loi truy cap db", 401));
    // }
    // if (user.ten != ten || user.mk != mk) {
    //   // res.status(404).json({
    //   //   message: "sai tai khoan hoac mat khau",
    //   // });
    //   return next(new appError("sai ten tk hoac mk", 401));
    // }
    // const cookieOptions = {
    //   expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    //   httpOnly: true, //browser ko the truy cap va sua doi
    // };
    // res.cookie("verify", "signined", cookieOptions);
    res.cookie("ten", `${ten}`, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
    });
    res.cookie("mk", `${mk}`, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
    });
    res.redirect(`/pagelogin?ten=${ten}&mk=${mk}`);
    // user = {
    //   ten: req.query.ten,
    //   mk: req.query.mk,
    // };
    // res.render("pagelogin", {
    //   user,
    // });
    //c2 dung truc tiep res.render luon ko can chuyen huong
};