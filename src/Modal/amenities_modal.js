const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const AmenitiesTable = sequelize.define("amenitiestable", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  amininitsName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  aminitiesDecription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  icon: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = AmenitiesTable;
