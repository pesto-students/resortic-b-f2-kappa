const PaymentService = require("./payment-service");
class PaymentController {
  addPayment = async (req, res) => {
    try {
      return await PaymentService._addPayment(req, res);
    } catch (error) {
      console.log("error c", error);
      res.status(200).json({ success: false, msg: error });
    }
  };
}

module.exports = new PaymentController();
