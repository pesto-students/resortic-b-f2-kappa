const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const AmenitiesTable = sequelize.define("amenitiestable", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  amininits_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  aminities_decription: {
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
