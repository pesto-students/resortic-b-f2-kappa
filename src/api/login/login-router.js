const express = require("express");

const router = express.Router();
const LoginController = require("./login-controller");

router.post("/add", LoginController.login);
router.post("/logout", LoginController.logout);

module.exports = router;
