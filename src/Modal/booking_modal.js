const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const BookingTable = sequelize.define("bookingtable", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  userId_proof: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  check_in: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  check_out: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  guest: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  is_check_in: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  is_check_out: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  createdAt:{
    type: Sequelize.STRING,
    defaultValue: Date.now(),
    allowNull: false
  },
  updatedAt:{
    type: Sequelize.STRING,
    defaultValue: Date.now(),
    allowNull: false
  }
},{timestamp: false});

module.exports = BookingTable;
