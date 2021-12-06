const BookingService = require("./booking-service");
const Utils = require("../utils");

class BookingController {
  newBooking = async (req, res) => {
    try {
      if (req.body.email) {
        if (!Utils.validateEmail(req.body.email))
          throw new Error("EMail is not valid !");
      }
      if (req.body.mobile) {
        if (!Utils.validatMobile(req.body.mobile))
          throw new Error("Invalid mobile number !");
      }
      if (req.body.status) {
        if (!Utils.validateStatus(req.body.status))
          throw new Error("Invalid Booking status !");
      }

      return await BookingService._book(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error.message });
    }
  };

  getAllBookings = async (req, res) => {
    try {
      return await BookingService._getUserBook(req, res);
    } catch (error) {
      console.log("error", error);
      res.status(200).json({ success: false, msg: error });
    }
  };

  getUpcomingBookings = async (req, res) => {
    try {
      return await BookingService._getUserUpcomingBook(req, res);
    } catch (error) {
      console.log("error", error);
      res.status(200).json({ success: false, msg: error });
    }
  };

  getPastBookings = async (req, res) => {
    try {
      return await BookingService._getUserPastBook(req, res);
    } catch (error) {
      console.log("error", error);
      res.status(200).json({ success: false, msg: error });
    }
  };

  updateBooking = async (req, res) => {
    try {
      if (req.body.email) {
        if (!Utils.validateEmail(req.body.email))
          throw new Error("EMail is not valid !");
      }
      if (req.body.mobile) {
        if (!Utils.validatMobile(req.body.mobile))
          throw new Error("Invalid mobile number !");
      }
      if (req.body.status) {
        if (!Utils.validateStatus(req.body.status))
          throw new Error("Invalid Booking status !");
      }

      return await BookingService._updatebook(req, res);
    } catch (error) {
      console.log("error", error);
      res.status(400).json({ success: false, msg: error.message || error });
    }
  };

  deleteBooking = async (req, res) => {
    try {
      return await BookingService._deletebook(req, res);
    } catch (error) {
      console.log("error", error);
      res.status(200).json({ success: false, msg: error });
    }
  };
}

module.exports = new BookingController();
