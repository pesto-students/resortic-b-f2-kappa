const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const RoomTable = sequelize.define("roomtable", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  room_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  room_price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  room_area: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  room_descrption: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  extra_content: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  max_occupancy: {
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
