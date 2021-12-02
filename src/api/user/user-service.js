const UserDAL = require("./user-dal");

class UserService {
  _register = async (req, res) => {
    try {
      let response = await UserDAL.registerUser(req, res);
      res.status(200).json({ success: true, data: response });
    } catch (error) {}
  };

  _getUser = async (req, res) => {
    try {
      let response = await UserDAL.getUser(req, res);
      res.status(200).json({ success: true, data: response });
    } catch (error) {}
  };

  _updateUser = async (req, res) => {
    try {
      let response = await UserDAL.updateUser(req, res);
      res.status(200).json({ success: true, data: response });
    } catch (error) {}
  };

  _deleteUser = async (req, res) => {
    try {
      let response = await UserDAL.deleteUser(req, res);
      res.status(200).json({ success: true, data: response });
    } catch (error) {}
  };
}

module.exports = new UserService();
