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
exports.signupon = async (req, res, next) => {
  const { ten, mk, mkagain } = req.body.body;
  console.log(ten, mk, mkagain);
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
  if (!mkagain) {
    // res.status(404).json({
    //   message: "chua nhap mk tai khoan ",
    // });
    return next(new appError("nhap lai mat khau", 402));
  }
  if (mkagain != mk) {
    // res.status(404).json({
    //   message: "chua nhap mk tai khoan ",
    // });
    return next(new appError("nhap lai mat khau", 403));
  }
  let user;
  try {
    user = await connect.query(`INSERT INTO taikhoan VALUES("${ten}","${mk}")
  `);
    console.log("đã truy cập db");
  } catch (err) {
    console.log(err);
    return next(new appError("loi truy cap db", 404));
  }
  //   if (!user) {
  //     // res.status(404).json({
  //     //   message: "oi truy cap db",
  //     // });
  //     return next(new appError("loi truy cap db", 404));
  //   }
  // const cookieOptions = {
  //   expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
  //   httpOnly: true, //browser ko the truy cap va sua doi
  // };
  // res.cookie("verify", "signined", cookieOptions);
  res.status(404).json({
    message: "dang nhap thanh cong",
  });
};
