"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl.js");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
<<<<<<< HEAD
router.get("/signup", ctrl.output.signup);
router.post("/signup", ctrl.process.signup);
=======
router.get("/signup", ctrl.output.signUp);
router.post("/singup", ctrl.process.signUp);
>>>>>>> origin/master

module.exports = router;
