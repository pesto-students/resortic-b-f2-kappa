const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const ResortRoomTable = sequelize.define("resortroomtable", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = ResortRoomTable;
