const Booking = require('../../Modal/booking_modal');
const { createSHA1 } = require("../utils");

class BookingDAL{
    createBooking = async(req,res)=>{
        return await Booking.create({
            ...req.body,
            sha_id : createSHA1("1"),
        })
        .then((data) => {
            return { msg: "Booking Successful.", data: data };
        })
        .catch((err) => {
            return { err: err };
        });
    };

}

module.exports = new BookingDAL();