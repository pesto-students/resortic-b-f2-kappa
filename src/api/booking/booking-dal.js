const Booking = require("../../Modal/booking_modal");
const Sequelize = require("sequelize");
const { createSHA1 } = require("../utils");

const database = require("../../../config/database");

class BookingDAL {
  createBooking = async (req, res) => {
    return await Booking.create({
      ...req.body,
      sha_id: "BOK-"+createSHA1(req.body.id),
    })
      .then((data) => {
        return { msg: "Booking Successful.", data: data };
      })
      .catch((err) => {
        return { err: err };
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

    const data = await database.query(
      "SELECT * FROM bookingtables WHERE usertableId=$1 AND check_in >= curdate() AND is_deleted=FALSE AND status <> 'Cancelled'",
      { type: Sequelize.QueryTypes.SELECT, bind: [sUserId] }
    );
    return data;
  };

  getUserPastBookings = async (req, res) => {
    var sUserId = req.params.userId;
    console.log(sUserId);

    const data = await database.query(
      "SELECT * FROM bookingtables WHERE usertableId=$1 AND check_in < curdate() AND is_deleted=FALSE",
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