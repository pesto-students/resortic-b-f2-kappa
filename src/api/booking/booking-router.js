const express = require("express");

const router = express.Router();
const BookingController = require("./boking-controller");

router.post("/book", BookingController.newBooking);
router.get("/book/:userId", BookingController.getAllBookings);
router.get("/book/:userId/upcoming", BookingController.getUpcomingBookings);
router.put("/book/:bookingId", BookingController.updateBooking);
router.delete("/book/:bookingId", BookingController.deleteBooking);

module.exports = router;
