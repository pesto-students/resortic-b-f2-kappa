const Joi = require("joi");

var today = new Date();
today =
  today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();

class BookingSchema {
  createBook = Joi.object({
    user_id_proof: Joi.string().required(),
    mobile: Joi.string().pattern(new RegExp("^[6-9]\\d{9}$")).required(),
    email: Joi.string()
      .email({ tlds: { allow: ["com"] } })
      .required(),
    check_in: Joi.date().min(today).required(),
    check_out: Joi.date().min(Joi.ref("check_in")).required(),
    guests: Joi.string().required(),
    status: Joi.any()
      .allow("Reserved", "Booked", "Cancelled", "Completed")
      .required(),
    is_checked_in: Joi.boolean(),
    is_checked_out: Joi.boolean(),
    resorttableId: Joi.string().required(),
    usertableId: Joi.string(),
    roomtableId: Joi.string().required(),
    rooms_count: Joi.number().min(1).required(),
    mail: Joi.object({
      to: Joi.string().required(),
      name: Joi.string().required(),
      resortname: Joi.string().required(),
      address: Joi.string().required(),
      checkin: Joi.string().required(),
      checkout: Joi.string().required(),
      Adults: Joi.number().required(),
      Children: Joi.number().required(),
      roomcount: Joi.number().required(),
      roomtype: Joi.string().required(),
      Package: Joi.string().required(),
      Amount: Joi.number().required(),
      contact: Joi.number().required(),
      mail: Joi.string().required(),
    }),
  });

  updateBook = Joi.object({
    mobile: Joi.string().pattern(new RegExp("^[6-9]\\d{9}$")),
    email: Joi.string().email({ tlds: { allow: ["com"] } }),
    check_in: Joi.date().min(today),
    check_out: Joi.date().min(Joi.ref("check_in")),
    guests: Joi.string(),
    status: Joi.any().allow("Reserved", "Booked", "Cancelled", "Completed"),
    is_checked_in: Joi.boolean(),
    is_checked_out: Joi.boolean(),
    rooms_count: Joi.number().min(1),
  });
}

module.exports = new BookingSchema();
