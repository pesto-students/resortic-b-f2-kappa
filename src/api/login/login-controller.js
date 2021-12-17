const LoginService = require("./login-service");
const { logoutSchema } = require("../../validation/loginValidationSchema");

const { mobileLoginSchema } = require("../../validation/userValidationSchema");
class LoginController {
  login = async (req, res) => {
    try {
      const { error, value } = await mobileLoginSchema.validateAsync({
        mobile: req.body.mobile,
      });

      if (error) {
        throw new Error(error);
      }
      // throw new Error("Errro");
      return await LoginService._login(req, res);
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, msg: error });
    }
  };

  logout = async (req, res) => {
    try {
      const { error, value } = await logoutSchema.validateAsync({
        usertableId: req.body.usertableId,
      });

      if (error) {
        throw new Error(error);
      }
      return await LoginService._logout(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error });
    }
  };
}

module.exports = new LoginController();
