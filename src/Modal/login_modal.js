const { Sequelize, BOOLEAN } = require("sequelize");

const sequelize = require("../../config/database");

const UserTable = sequelize.define("logintable", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  mobile: {
    type: Sequelize.BIGINT(10),
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  issue_time: {
    type: Sequelize.BIGINT(15),
    allowNull: false,
  },
  expiry_time: {
    type: Sequelize.BIGINT(15),
    allowNull: false,
  },
  is_logout: {
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
