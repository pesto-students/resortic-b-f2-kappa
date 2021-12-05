const Joi = require("joi");

exports.userSchema = Joi.object({
  first_name: Joi.string().alphanum().min(3),
  last_name: Joi.string().alphanum().min(3),
  mobile: Joi.string().pattern(new RegExp("/^[6-9]d{9}$/")).required(),
  email: Joi.string()
    .email({ tlds: { allow: ["com"] } })
    .required(),
  address: Joi.string().alphanum().min(5),
  Image: Joi.string().alphanum().min(5),
});

exports.mobileLoginSchema = Joi.object({
  mobile: Joi.string().pattern(new RegExp("/^[6-9]d{9}$/")).required(),
});

exports.socialMediaSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: ["com"] } })
    .required(),
});
