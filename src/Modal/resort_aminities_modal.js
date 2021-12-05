const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const ResortAminitiesTable = sequelize.define("resortaminitiestable", {
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

module.exports = ResortAminitiesTable;
