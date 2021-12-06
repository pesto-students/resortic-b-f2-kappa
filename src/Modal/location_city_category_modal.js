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
  },
);

module.exports = LocationCityCategoryTable;
