const GeuestTokenDAL = require("./guesttoken-dal");
class GuestTokenService {
  _guestToken = async (req, res) => {
    try {
      let response = await GeuestTokenDAL.guestToken(req, res);
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      console.log("error", error);
      //   res.status(200).json({ success: false, error: error });
    }
  };
}

module.exports = new GuestTokenService();
