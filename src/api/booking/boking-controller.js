const BookingService = require('./booking-service');
const { validateEmail, validatMobile } = require("../utils");


class BookingController {
  newBooking = async(req,res) =>{
    try {
      if (req.body.email) {
        if (!validateEmail(req.body.email))
          throw new Error("EMail is not valid !");
      }
      if (req.body.mobile) {
        if (!validatMobile(req.body.mobile))
          throw new Error("Invalid mobile number !");
      }

      return await BookingService._book(req,res)
    } catch (error) {
      console.log("error", error);
      res.status(200).json({ success: false, msg: error });
    }
  };
 
};

module.exports = new BookingController();
