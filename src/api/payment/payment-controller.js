const PaymentService = require("./payment-service");
const {
  paymentAddSchema,
  deletePaymentSchema,
} = require("../../validation/paymentValidationSchema");
class PaymentController {
  addPayment = async (req, res) => {
    try {
      const { body } = req;
      const { error, value } = await paymentAddSchema.validateAsync(body);

      if (error) {
        throw new Error(error);
      }
      return await PaymentService._addPayment(req, res);
    } catch (error) {
      console.log("error c", error);
      res.status(400).json({ success: false, msg: error });
    }
  };

  deletePayment = async (req, res) => {
    try {
      const { error, value } = await deletePaymentSchema.validateAsync({
        id: req.body.id,
        transitionID: req.body.transitionID,
      });

      if (error) {
        throw new Error(error);
      }
      return await PaymentService._deletePayment(req, res);
    } catch (error) {
      console.log("error c", error);
      res.status(400).json({ success: false, msg: error });
    }
  };

  getRazorpayOrder = async (req, res) => {
    try {
      return await PaymentService._getOrdeId(req, res);
    } catch (error) {
      console.log("error", error);
      res.status(200).json({ success: false, msg: error });
    }
  };
}

module.exports = new PaymentController();
