const User = require("../../models/User");
const authService = require("../../services/auth.service");
const {
  mobileLoginSchema,
  socialMediaSchema,
  userSchema,
  idSchema,
} = require("../../validation/userValidationSchema");

const UserService = require("./user-service");
const { validateEmail } = require("../utils");

class UserController {
  register = async (req, res) => {
    console.log("req", req.body);
    try {
      const { error, value } = await mobileLoginSchema.validateAsync({
        mobile: req.body.mobile,
      });

      if (error) {
        throw new Error(error);
      }

      return await UserService._register(req, res);
    } catch (error) {
      console.log("error", error);
      res.status(400).json({ success: false, msg: error });
    }
  };

  getUser = async (req, res) => {
    try {
      const { error, value } = await idSchema.validateAsync({
        id: req.query.id,
      });

      if (error) {
        throw new Error(error);
      }
      return await UserService._getUser(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error });
    }
  };

  updateUser = async (req, res) => {
    try {
      const { error, value } = await userSchema.validateAsync(req.body);

      if (error) {
        throw new Error(error);
      }
      return await UserService._updateUser(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const { error, value } = await idSchema.validateAsync({
        id: req.body.id,
      });

      if (error) {
        throw new Error(error);
      }
      return await UserService._deleteUser(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error });
    }
  };
}

module.exports = new UserController();
