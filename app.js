const express = require("express");
const app = express();
const userRouter = require("./router/userRouter");
const cookieParser = require("cookie-parser");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(cookieParser());
//route middle
app.use("/", userRouter);
//view
app.set("view engine", "ejs");
app.set("views", "./views");
module.exports = app;
