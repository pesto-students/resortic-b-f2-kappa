const express = require("express");
const paymentController = require("./payment-controller");

const router = express.Router();

router.post("/add", paymentController.addPayment);
router.post("/delete", paymentController.deletePayment);

module.exports = router;
