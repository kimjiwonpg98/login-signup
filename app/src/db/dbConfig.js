const mysql = require("mysql");
require("dotenv").config();

const dbConfig = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "login",
});

dbConfig.connect();

module.exports = dbConfig;
