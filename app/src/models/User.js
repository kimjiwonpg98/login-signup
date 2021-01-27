`use strict`;

const UserStorage = require("./UserStorage");
const bcrypt = require("bcrypt-nodejs");
//body 받아서 처리하는 부분

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const cilent = this.body;
    const db = await UserStorage.getUserInfo(cilent.id);
    if (db) {
      if (cilent.id === db.id && bcrypt.compareSync(cilent.pw, db.password)) {
        return { success: true, name: db.name, token: db.token };
      }
      return { success: false, msg: "비밀번호가 맞지 않습니다." };
    }
    return { success: false, msg: "아이디가 존재하지 않습니다." };
  }

  async signup() {
    const cilent = this.body;
    try {
      const response = await UserStorage.save(cilent);
      return response;
    } catch (err) {
      return { success: false, msg: "이미 존재하는 아이디" };
    }
  }
}

module.exports = User;
