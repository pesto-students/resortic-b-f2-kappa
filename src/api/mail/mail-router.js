const express = require("express");

const mailDal = require("./mail-dal");

const router = express.Router();

router.get("/send", mailDal.sendMail);

module.exports = router;
