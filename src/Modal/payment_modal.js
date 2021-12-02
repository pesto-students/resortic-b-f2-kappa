const { Sequelize } = require("sequelize");

const sequelize = require("../../config/database");

const PaymentTable = sequelize.define("paymenttable", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  transitionID: {
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
  actualAmount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  paymentDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  paymentStatus: {
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
