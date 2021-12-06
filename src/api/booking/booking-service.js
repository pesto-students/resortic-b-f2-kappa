const BookingDAL = require("./booking-dal");

class BooingService {
  _book = async (req, res) => {
    try {
      let resp = await BookingDAL.createBooking(req, res);
      res.status(200).json({ success: true, data: resp });
    } catch (error) {
      return res.status(404).send({ error });
    }
  };

  _getUserBook = async (req, res) => {
    try {
      let resp = await BookingDAL.getUserAllBookings(req, res);
      res.status(200).json({ success: true, data: resp });
    } catch (error) {
      return res.status(404).send({ error });
    }
  };

  _getUserUpcomingBook = async (req, res) => {
    try {
      let resp = await BookingDAL.getUserUpcomingBookings(req, res);
      res.status(200).json({ success: true, data: resp });
    } catch (error) {
      return res.status(404).send({ error });
    }
  };

  _getUserPastBook = async (req, res) => {
    try {
      let resp = await BookingDAL.getUserPastBookings(req, res);
      res.status(200).json({ success: true, data: resp });
    } catch (error) {
      return res.status(404).send({ error });
    }
  };

  _updatebook = async (req, res) => {
    try {
      let resp = await BookingDAL.updateBooking(req, res);
      res.status(200).json({ success: true, data: resp });
    } catch (error) {
      return res.status(404).send({ error });
    }
  };

  _deletebook = async (req, res) => {
    try {
      let resp = await BookingDAL.deleteBooking(req, res);
      res.status(200).json({ success: true, data: resp });
    } catch (error) {
      return res.status(404).send({ error });
    }
  };
}

module.exports = new BooingService();
