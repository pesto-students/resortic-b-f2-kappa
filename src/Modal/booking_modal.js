const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const BookingTable = sequelize.define("bookingtable", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  user_id_proof: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  mobile: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
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
  guests: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM("Reserved", "Booked", "Cancelled", "Completed"),
    allowNull: false,
  },
  is_checked_in: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  is_checked_out: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
});

module.exports = BookingTable;
