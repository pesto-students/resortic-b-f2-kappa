const authService = require("../../services/auth.service");
const { createJWT } = authService();

class GuestTokenDAL {
  guestToken = async (req, res) => {
    const { guestSystemId } = req.query;
    if (!guestSystemId) return { msg: "Guest Id required." };
    try {
      return {
        msg: "Guest Token.",
        data: createJWT({ guestId: guestSystemId }),
      };
    } catch (error) {
      console.log("error", error);
      return { err: error };
    }
  };
}

module.exports = new GuestTokenDAL();
