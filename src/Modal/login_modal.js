const { Sequelize, BOOLEAN } = require("sequelize");

const sequelize = require("../../config/database");

const UserTable = sequelize.define("logintable", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  mobile: {
    type: Sequelize.BIGINT(10),
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  issueTime: {
    type: Sequelize.BIGINT(15),
    allowNull: false,
  },
  expiryTime: {
    type: Sequelize.BIGINT(15),
    allowNull: false,
  },
  isLogout: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  // usertableId: {
  //   type: Sequelize.BIGINT(10),
  //   allowNull: false,
  //   unique: true,
  // },
});

module.exports = UserTable;
