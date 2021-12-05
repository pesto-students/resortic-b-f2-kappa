const express = require("express");
const paymentController = require("./payment-controller");

const router = express.Router();

router.post("/add", paymentController.addPayment);

module.exports = router;
