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
});

module.exports = ResortCategoryTable;
