const id = document.querySelector(".inputID"),
  password = document.querySelector(".inputPW"),
  userName = document.querySelector(".userName"),
  completeBtn = document.querySelector(".complete");

const db = require("../config/dbConfig");

function run() {
  completeBtn.addEventListener("click", () => settingDB);
  console.log("hi");
}

function settingDB() {
  let sql = "INSERT INTO user (id, password, name) VALUES (?, ?, ?)";
  const params = [id.value, password.value, userName.value];
  db.query(sql, params, (err, rows, fields) => {
    if (err) console.log(err);
  });
}

run();
