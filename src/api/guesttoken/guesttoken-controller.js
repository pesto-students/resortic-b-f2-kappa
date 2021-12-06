const GuestTokenService = require("./guesttoken-services");
const { logoutSchema } = require("../../validation/loginValidationSchema");

const { mobileLoginSchema } = require("../../validation/userValidationSchema");
class GuestTokenController {
  guestToken = async (req, res) => {
    try {
      return await GuestTokenService._guestToken(req, res);
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, msg: error });
    }
  };
}

module.exports = new GuestTokenController();
