const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const PaymentTable = sequelize.define("paymenttable", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  order_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  payment_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  payment_signature: {
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
  paid_amount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  payment_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  payment_status: {
    type: Sequelize.ENUM("successfull", "failed", "pending", "refund"),
    allowNull: false,
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = PaymentTable;
