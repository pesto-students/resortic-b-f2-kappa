const Joi = require("joi");

class UserValidationSchema {
  userSchema = Joi.object({
    id: Joi.string().alphanum().min(3).required(),
    first_name: Joi.string().alphanum().min(3),
    last_name: Joi.string().alphanum().min(3),
    mobile: Joi.string().pattern(new RegExp("/^[6-9]d{9}$/")).required(),
    email: Joi.string()
      .email({ tlds: { allow: ["com"] } })
      .required(),
    address: Joi.string().alphanum().min(5),
    Image: Joi.string().alphanum().min(5),
  });

  mobileLoginSchema = Joi.object({
    mobile: Joi.string().pattern(new RegExp("/^[6-9]d{9}$/")).required(),
  });

  socialMediaSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: ["com"] } })
      .required(),
  });

  idSchema = Joi.object({
    id: Joi.string().alphanum().min(3).required(),
  });
}

module.exports = new UserValidationSchema();
