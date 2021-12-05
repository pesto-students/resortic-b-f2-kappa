const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const UserTable = sequelize.define("usertable", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  mobile: {
    type: Sequelize.BIGINT(10),
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = UserTable;

