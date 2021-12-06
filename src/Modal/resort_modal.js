const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const ResortTable = sequelize.define("resorttable", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  resortName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  resortEmail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  site: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  extraContent: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contactNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pin: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  longititude: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  startingPrice: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  majorAminities: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  amnitites: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = ResortTable;
