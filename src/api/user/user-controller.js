const User = require("../../models/User");
const authService = require("../../services/auth.service");
const bcryptService = require("../../services/bcrypt.service");

const UserService = require("./user-service");
const { validateEmail } = require("../utils");
//intsall joi validation

class UserController {
  register = async (req, res) => {
    try {
      if (req.body.email) {
        if (!validateEmail(req.body.email))
          throw new Error("EMail is not valid !");
      }

      return await UserService._register(req, res);
    } catch (error) {
      console.log("error", error);
      res.status(200).json({ success: false, msg: error });
    }
  };

  getUser = async (req, res) => {
    try {
      return await UserService._getUser(req, res);
    } catch (error) {}
  };

  updateUser = async (req, res) => {
    try {
      if (req.body.email) {
        if (!validateEmail(req.body.email))
          throw new Error("EMail is not valid !");
      }
      return await UserService._updateUser(req, res);
    } catch (error) {}
  };

  deleteUser = async (req, res) => {
    try {
      return await UserService._deleteUser(req, res);
    } catch (error) {}
  };
}

module.exports = new UserController();
