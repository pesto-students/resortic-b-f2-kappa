const PaymentDAL = require("./payment-dal");
class PaymentService {
  //   _addPayment = async (req, res) => {
  //     try {
  //       //   let response = await PaymentDAL.addPayment(req, res);
  //       //   res.status(200).json({ success: true, data: response });
  //       let response = await PaymentDAL.addPayment(req, res);
  //       console.log("response", response);
  //       res.status(200).json({ success: true, data: response });
  //     } catch (error) {
  //       console.log("serv error", error);
  //       res.status(200).json({ success: false, error: error });
  //     }
  //   };

  _addPayment = async (req, res) => {
    try {
      let response = await PaymentDAL.addPayment(req, res);
      res.status(200).json({ success: true, data: response });
    } catch (error) {}
  };
}

module.exports = new PaymentService();
