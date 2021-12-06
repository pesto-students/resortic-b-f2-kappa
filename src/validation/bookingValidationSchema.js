const Joi = require("joi");

class BookingSchema{
    createBook = Joi.object({
        user_id_proof: Joi.string().required(),
        mobile: Joi.string().pattern(new RegExp("/^[6-9]d{9}$/")).required(),
        email: Joi.string()
            .email({ tlds: { allow: ["com"] } })
            .required(),
        check_in: Joi.date().greater('now').required(),
        check_out: Joi.date().min(Joi.ref('check_in')).required(),
        guests: Joi.string().required(),
        status: Joi.any().allow("Reserved", "Booked", "Cancelled", "Completed").required(),
        resorttableId : Joi.string().required(),
        usertableId : Joi.string().required(),
        roomtableId : Joi.string().required(),
    });

    updateBook = Joi.object({
        mobile: Joi.string().pattern(new RegExp("/^[6-9]d{9}$/")),
        email: Joi.string()
            .email({ tlds: { allow: ["com"] } }),
        check_in: Joi.date().greater('now'),
        check_out: Joi.date().min(Joi.ref('check_in')),
        guests: Joi.string(),
        status: Joi.any().allow("Reserved", "Booked", "Cancelled", "Completed")
    });
}

module.exports = new BookingSchema();
