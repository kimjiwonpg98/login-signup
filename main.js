const express = require("express");
const home = require("./routes/routes");
const bodyParser = require("body-parser");
const app = express();
//실행되는 js 파일 기준 set!
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home);

module.exports = app;
