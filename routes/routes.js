"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl.js");

router.get("/", ctrl.home);
router.get("/login", ctrl.login);
router.get("/signUp", ctrl.signUp);

module.exports = { router };
