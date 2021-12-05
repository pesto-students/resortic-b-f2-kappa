const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const ResortCategoryTable = sequelize.define("resortcategorytable", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  category_name: {
    type: Sequelize.STRING,
    allowNull: false,
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

module.exports = ResortCategoryTable;
