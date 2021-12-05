const PaymentTable = require("../../Modal/payment_modal");
const { getCurrentTimestamp, createSHA1 } = require("../utils");

class PaymentDAL {
  addPayment = async (req, res) => {
    const { body } = req;
    console.log("ser", body);
    body.id = "PAY-" + createSHA1(body.transitionID);
    // body.PaymentDate = new Date();
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
}

module.exports = new PaymentDAL();
