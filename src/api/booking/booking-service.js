const BookingDAL = require("./booking-dal");

class BooingService {
  _book = async (req, res) => {
    try {
      let resp = await BookingDAL.createBooking(req, res);
      res.status(200).json({ success: true, data: resp });
    } catch (error) {
      return res.status(400).json({ success: false, msg2: error });
    }
  };

  _getUserBook = async (req, res) => {
    try {
      let resp = await BookingDAL.getUserAllBookings(req, res);
      res.status(200).json({ success: true, data: resp });
    } catch (error) {
      return res.status(400).json({ success: false, msg: error });
    }
  };

  _getUserUpcomingBook = async (req, res) => {
    try {
      let resp = await BookingDAL.getUserUpcomingBookings(req, res);
      res.status(200).json({ success: true, data: resp });
    } catch (error) {
      return res.status(400).json({ success: false, msg: error });
    }
  };

  _getUserPastBook = async (req, res) => {
    try {
      let resp = await BookingDAL.getUserPastBookings(req, res);
      res.status(200).json({ success: true, data: resp });
    } catch (error) {
      return res.status(400).json({ success: false, msg: error });
    }
  };

  _updatebook = async (req, res) => {
    try {
      let resp = await BookingDAL.updateBooking(req, res);
      res.status(200).json({ success: true, data: resp });
    } catch (error) {
      return res.status(400).json({ success: false, msg: error });
    }
  };

  _deletebook = async (req, res) => {
    try {
      let resp = await BookingDAL.deleteBooking(req, res);
      res.status(200).json({ success: true, data: resp });
    } catch (error) {
      return res.status(400).json({ success: false, msg: error });
    }
  };
}

module.exports = new BooingService();
