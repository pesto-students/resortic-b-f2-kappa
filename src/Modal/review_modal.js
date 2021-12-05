const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const ReviewTable = sequelize.define("reviewtable", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  feedback: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: Sequelize.FLOAT,
    allowNull: false,
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

module.exports = ReviewTable;
