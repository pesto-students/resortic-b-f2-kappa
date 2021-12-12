const Booking = require("../../Modal/booking_modal");
const Sequelize = require("sequelize");
const utils = require("../utils");
const mailer = require("../mail/mail-dal")
const database = require("../../../config/database");

class BookingDAL {
  createBooking = async (req, res) => {
    var body = req.body;
    body.id = "BOK-"+ utils.createSHA1("BOOK-" + req.body.mobile + new Date().toISOString());
    // body.check_in = utils.getCurrentTimestamp(req.body.check_in);
    // body.check_out = utils.getCurrentTimestamp(req.body.check_out);

    return await Booking.create({
      ...body
    })
      .then((data) => {
        mailer.sendMail(data);
        return { msg: "Booking Successful.", data: data };
      })
      .catch((err) => {
        return res.status(400).json({ success: false, msg1: err });
      });
  };

  getUserAllBookings = async (req, res) => {
    var sUserId = req.params.userId;
    console.log(sUserId);

    const data = await database.query(
      "SELECT * FROM bookingtables WHERE usertableId=$1 AND is_deleted=FALSE",
      { type: Sequelize.QueryTypes.SELECT, bind: [sUserId] }
    );
    return data;
  };

  getUserUpcomingBookings = async (req, res) => {
    var sUserId = req.params.userId;
    console.log(sUserId);

    // const data = await database.query(
    //   "SELECT * FROM bookingtables WHERE usertableId=$1 AND check_in >= curdate() AND is_deleted=FALSE AND status <> 'Cancelled'",
    //   { type: Sequelize.QueryTypes.SELECT, bind: [sUserId] }
    // );
    const data = await database.query(
      "SELECT p.paid_amount, b.id, b.check_in,b.check_out,b.guests,b.rooms_count,b.usertableId,r.resort_name,r.address, (SELECT AVG(rating) FROM reviewtables WHERE resorttableId = r.id) as rating FROM paymenttables as p JOIN bookingtables as b ON p.bookingtableId = b.id JOIN resorttables as r ON b.resorttableId = r.id WHERE b.usertableId=$1 AND b.check_in >= curdate() AND b.is_deleted=FALSE AND b.status <> 'Cancelled'",
      { type: Sequelize.QueryTypes.SELECT, bind: [sUserId] }
    );
    return data;
  };

  getUserPastBookings = async (req, res) => {
    var sUserId = req.params.userId;
    console.log(sUserId);

    // const data = await database.query(
    //   "SELECT * FROM bookingtables WHERE usertableId=$1 AND check_in < curdate() AND is_deleted=FALSE",
    //   { type: Sequelize.QueryTypes.SELECT, bind: [sUserId] }
    // );
    const data = await database.query(
      "SELECT p.paid_amount, b.id, b.check_in,b.check_out,b.guests,b.rooms_count,b.usertableId,r.resort_name,r.address, (SELECT AVG(rating) FROM reviewtables WHERE resorttableId = r.id) as rating FROM paymenttables as p JOIN bookingtables as b ON p.bookingtableId = b.id JOIN resorttables as r ON b.resorttableId = r.id WHERE b.usertableId=$1 AND b.check_in < curdate() AND b.is_deleted=FALSE",
      { type: Sequelize.QueryTypes.SELECT, bind: [sUserId] }
    );
    return data;
  };

  updateBooking = async (req, res) => {
    return await Booking.update(
      {
        ...req.body
      },
      {
        where: {
          id: req.params.bookingId,
          is_deleted: false,
        },
      }
    )
      .then((data) => {
        return { msg: "Booking Updated Successful.", data: data };
      })
      .catch((err) => {
        return { err: err };
      });
  };

  deleteBooking = async (req, res) => {
    return await Booking.update(
      {
        is_deleted:true
      },
      {
        where: {
          id: req.params.bookingId,
        },
      }
    )
      .then((data) => {
        return { msg: "Booking Deleted Successful.", data: data };
      })
      .catch((err) => {
        return { err: err };
      });
  };
}

module.exports = new BookingDAL();
