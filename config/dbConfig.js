const mysql = require("mysql");

const dbConfig = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "dhakdlrjf",
  database: "login",
});

dbConfig.connect();

module.exports = { dbConfig };
