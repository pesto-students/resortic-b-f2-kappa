const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const ResortAminitiesTable = sequelize.define("resortaminitiestable", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = ResortAminitiesTable;
