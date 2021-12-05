const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const LocationCityCategoryTable = sequelize.define(
  "locationcitycategorytable",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    city: {
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
  },{timestamp: false}
);

module.exports = LocationCityCategoryTable;
