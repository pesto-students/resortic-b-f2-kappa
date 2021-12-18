const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const UserTable = sequelize.define("usertable", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  mobile: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
     defaultValue: null,
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
});

module.exports = UserTable;
