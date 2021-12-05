const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const RoomTable = sequelize.define("roomtable", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  roomName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  roomPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  roomArea: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  roomDescrption: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  extraContent: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  maxOccupancy: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  available: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = RoomTable;
