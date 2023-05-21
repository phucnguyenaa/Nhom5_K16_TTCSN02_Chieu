const express = require("express");
const { overview } = require("../controller/overview");
const { signin } = require("../controller/signin");
const { signup } = require("./../controller/sigup");
const { login } = require("../controller/login");
const { signupon } = require("./../controller/signupon");
const { pagelogin } = require("./../controller/pagelogin");
const { page } = require("./../controller/page");
const { pagelo } = require("./../controller/pagelo");
const { panigation2 } = require("./../controller/panigation2");
const { panigation1 } = require("./../controller/panigation1");
const { order } = require("./../controller/order");
const { giohang } = require("./../controller/giohang");
const router = express.Router();
router.get("/overview", overview);
router.get("/signin", signin);
router.get("/signup", signup);
router.post("/signupon", signupon);
router.post("/login", login);
router.get("/pagelogin", pagelogin);
router.get("/pagelo", pagelo);
router.get("/page", page);
router.get("/panigation1", panigation1);
router.get("/panigation2", panigation2);
router.post("/order", order);
router.get("/giohang", giohang);
router.get("/cookie", (req, res) => {
  res.cookie("mk", 123);
  res.end();
});
router.get("/getcookie", (req, res) => {
  res.json(req.cookies.mk);
});
router.get("/clear", (req, res) => {
  res.clearCookie("ten");
  res.clearCookie("mk");
  res.setHeader("Cache-Control", "no-cache");
  console.log(res.contr);
  res.send("Cookie cleared");
  console.log(res);
  // res.clearCookie("mk");
});
//van chua clear cookie tu server dc
//lm signcookie va cac option
module.exports = router;
