// const User = require("../../models/User");
const UserTable = require("../../Modal/user_modal");
const { getCurrentTimestamp } = require("../utils");

class UserDAL {
  registerUser = async (req, res) => {
    const { body } = req;
    body.is_deleted = false;
    body.createdAt = getCurrentTimestamp();
    body.updatedAt = getCurrentTimestamp();

    return await UserTable.create(body)
      .then((data) => {
        return { msg: "User registered successfully.", data: data };
      })
      .catch((err) => {
        return { err: err };
      });
  };

  getUser = async (req, res) => {
    const { id } = req.query;
    return await UserTable.findAll({
      where: {
        id: id,
        is_deleted: false,
      },
    })
      .then((data) => {
        if (!data.length) return { msg: "User not found." };
        return { msg: "User returned successfully.", data: data };
      })
      .catch((err) => {
        return { err: err };
      });
  };

  updateUser = async (req, res) => {
    const { body } = req;
    body.is_deleted = false;
    body.updatedAt = getCurrentTimestamp();

    return await UserTable.update(body, {
      where: {
        id: body.id,
        is_deleted: false,
      },
    })
      .then((data) => {
        if (!data[0]) return { msg: "User not found." };
        return { msg: "User updated successfully.", data: data };
      })
      .catch((err) => {
        return { err: err };
      });
  };

  deleteUser = async (req, res) => {
    const { body } = req;
    body.is_deleted = true;
    body.updatedAt = getCurrentTimestamp();

    return await UserTable.update(body, {
      where: {
        id: body.id,
        is_deleted: false,
      },
    })
      .then((data) => {
        return { msg: "User deleted successfully.", data: data };
      })
      .catch((err) => {
        return { err: err };
      });
  };
}

module.exports = new UserDAL();
