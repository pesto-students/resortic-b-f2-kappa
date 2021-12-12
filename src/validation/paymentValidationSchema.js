const Joi = require("joi");

class PaymentValidationSchema {
  paymentAddSchema = Joi.object({
    transition_id: Joi.string().min(3).required(),
    total: Joi.number().required(),
    discount: Joi.number().required(),
    actual_amount: Joi.number().required(),
    payment_status: Joi.string().alphanum().min(3).required(),
    bookingtableId: Joi.string().min(3).required(),
    usertableId: Joi.string().min(3).required(),
  });

  deletePaymentSchema = Joi.object({
    id: Joi.string().min(3).required(),
    transition_id: Joi.string().min(3).required(),
  });
}

module.exports = new PaymentValidationSchema();
