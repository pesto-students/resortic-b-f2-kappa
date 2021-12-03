const express = require("express");

const router = express.Router();
const BookingController = require('./boking-controller')

router.post("/book", BookingController.newBooking);

module.exports = router;
