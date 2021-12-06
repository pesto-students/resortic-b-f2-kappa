const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const CategoryTable = sequelize.define("categorytable", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  category_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category_description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = CategoryTable;
