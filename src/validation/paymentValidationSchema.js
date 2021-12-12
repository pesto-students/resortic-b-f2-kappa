const Joi = require("joi");

class PaymentValidationSchema {
  paymentAddSchema = Joi.object({
    order_id: Joi.string().required(),
    payment_id: Joi.string().min(3).required(),
    payment_signature: Joi.string().alphanum().required(),
    total: Joi.number().required(),
    discount: Joi.string().required(),
    paid_amount: Joi.number().required(),
    payment_status: Joi.any().allow("successfull", "failed", "pending", "refund").required(),
    bookingtableId: Joi.string().min(3).required(),
    usertableId: Joi.string().min(3).required(),
  });

  deletePaymentSchema = Joi.object({
    id: Joi.string().alphanum().min(3).required(),
    payment_id: Joi.string().alphanum().min(3).required(),
  });
}

module.exports = new PaymentValidationSchema();
