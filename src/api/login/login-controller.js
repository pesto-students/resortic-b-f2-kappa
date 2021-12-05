const LoginService = require("./login-service");

class LoginController {
  login = async (req, res) => {
    try {
      // throw new Error("Errro");
      return await LoginService._login(req, res);
    } catch (error) {
      console.log(error);
      res.status(200).json({ success: false, msg: error });
    }
  };

  logout = async (req, res) => {
    try {
      return await LoginService._logout(req, res);
    } catch (error) {
      res.status(200).json({ success: false, msg: error });
    }
  };
}

module.exports = new LoginController();
