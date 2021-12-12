const PaymentTable = require("../../Modal/payment_modal");
const { getCurrentTimestamp, createSHA1 } = require("../utils");
const razorpay = require('../../../config/razorpay-config');

class PaymentDAL {
  addPayment = async (req, res) => {
    const { body } = req;
    console.log("ser", body);
    body.id = "PAY-" + createSHA1(body.payment_id);
    body.createdAt = getCurrentTimestamp();
    body.updatedAt = getCurrentTimestamp();
    body.payment_date = getCurrentTimestamp();
    console.log("ser", body);
    return await PaymentTable.create(body)
      .then((data) => {
        return { msg: "Transaction successfull.", data: data };
      })
      .catch((err) => {
        console.log("err", err);
        return { err: err };
      });
  };

  deletePayment = async (req, res) => {
    var { body } = req.body;

    body.updatedAt = getCurrentTimestamp();
    console.log("ser", body);
    return await PaymentTable.update(
      { is_deleted: true },
      {
        where: {
          id: body.id,
          payment_id: body.payment_id,

        },
      }
    )
      .then((data) => {
        return { msg: "Transaction successfull.", data: data };
      })
      .catch((err) => {
        console.log("err", err);
        return { err: err };
      });
  };

  getOrderId = async (req, res) => {
    var { body } = req;

    const options = {
      amount: body.amount * 100,
      currency: body.currency,
      receipt: "RAZ-" + new Date().toISOString(),
      payment_capture: 1,
    };

    try {
      const response = await razorpay.orders.create(options);
      console.log(response);
      return {
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      };
    } catch (error) {
      return res.status(400).json({ success: false, msg1: error });
    }
  };
}

module.exports = new PaymentDAL();
