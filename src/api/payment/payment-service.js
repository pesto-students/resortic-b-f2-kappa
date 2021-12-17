const PaymentDAL = require("./payment-dal");
class PaymentService {
  _addPayment = async (req, res) => {
    try {
      let response = await PaymentDAL.addPayment(req, res);
      res.status(200).json({ success: true, data: response });
    } catch (error) {}
  };

  _deletePayment = async (req, res) => {
    try {
      let response = await PaymentDAL.deletePayment(req, res);
      res.status(200).json({ success: true, data: response });
    } catch (error) {}
  };

  _getOrdeId = async (req, res) => {
    try {
      let response = await PaymentDAL.getOrderId(req, res);
      res.status(200).json({ success: true, data: response });
    } catch (error) {
      
    }
  };
}

module.exports = new PaymentService();
