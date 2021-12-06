const Joi = require("joi");

class LoginValidationSchema {
  logoutSchema = Joi.object({
    usertableId: Joi.string().alphanum().min(3).required(),
  });
}

module.exports = new LoginValidationSchema();
