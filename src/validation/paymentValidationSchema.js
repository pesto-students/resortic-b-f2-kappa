const Joi = require("joi");

class PaymentValidationSchema {
  paymentAddSchema = Joi.object({
    transitionID: Joi.string().alphanum().min(3).required(),
    total: Joi.number().required(),
    discount: Joi.number().required(),
    actualAmount: Joi.number().required(),
    paymentStatus: Joi.string().alphanum().min(3).required(),
    bookingtableId: Joi.string().alphanum().min(3).required(),
    usertableId: Joi.string().alphanum().min(3).required(),
  });

  deletePaymentSchema = Joi.object({
    id: Joi.string().alphanum().min(3).required(),
    transitionID: Joi.string().alphanum().min(3).required(),
  });
}

module.exports = new PaymentValidationSchema();
