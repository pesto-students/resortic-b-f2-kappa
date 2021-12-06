const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const PaymentTable = sequelize.define("paymenttable", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  transition_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  discount: {
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
});

module.exports = PaymentTable;
