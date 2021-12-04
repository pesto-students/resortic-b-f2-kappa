const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const BookingTable = sequelize.define("bookingtable", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  userIdProof: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  checkIn: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  checkOut: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  guest: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isCheckIn: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  isCheckOut: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = BookingTable;
