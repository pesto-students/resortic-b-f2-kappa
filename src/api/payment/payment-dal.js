const PaymentTable = require("../../Modal/payment_modal");
const { getCurrentTimestamp, createSHA1 } = require("../utils");

class PaymentDAL {
  addPayment = async (req, res) => {
    const { body } = req;
    console.log("ser", body);
    body.id = "PAY-" + createSHA1(body.transitionID);
    body.createdAt = getCurrentTimestamp();
    body.updatedAt = getCurrentTimestamp();
    body.PaymentDate = getCurrentTimestamp();
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
    const { body } = req;

    body.updatedAt = getCurrentTimestamp();
    console.log("ser", body);
    return await PaymentTable.update(
      { is_deleted: true },
      {
        where: {
          id: body.id,
          transitionID: body.transitionID,
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
}

module.exports = new PaymentDAL();
