const LoginDAL = require("./login-dal");
class LoginService {
  _login = async (req, res) => {
    try {
      let response = await LoginDAL.login(req, res);
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      console.log("error", error);
      //   res.status(200).json({ success: false, error: error });
    }
  };

  _logout = async (req, res) => {
    try {
      let response = await LoginDAL.logout(req, res);
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      console.log("error", error);
      //   res.status(200).json({ success: false, error: error });
    }
  };
}

module.exports = new LoginService();
