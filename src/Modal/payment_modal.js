const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const PaymentTable = sequelize.define("paymenttable", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  transition_ID: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Total: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  discout: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  actual_amount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  payment_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  payment_status: {
    type: Sequelize.BOOLEAN,
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

module.exports = PaymentTable;
