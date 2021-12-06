const Joi = require("joi");

class ReviewValidationSchema {
  reviewSchema = Joi.object({
    feedback: Joi.string().alphanum().min(3).required(),
    rating: Joi.string().alphanum().min(3).required(),
    usertableId: Joi.string().alphanum().min(3).required(),
    resorttableId: Joi.string().alphanum().min(3).required(),
  });

  updateReviewSchema = Joi.object({
    id: Joi.string().alphanum().min(3).required(),
    feedback: Joi.string().alphanum().min(3).required(),
    rating: Joi.string().alphanum().min(3).required(),
    usertableId: Joi.string().alphanum().min(3).required(),
    resorttableId: Joi.string().alphanum().min(3).required(),
  });

  reviewIdSchema = Joi.object({
    id: Joi.string().alphanum().min(3).required(),
    usertableId: Joi.string().alphanum().min(3).required(),
    resorttableId: Joi.string().alphanum().min(3).required(),
  });

  getReviewSchema = Joi.object({
    resorttableId: Joi.string().alphanum().min(3).required(),
  });
}

module.exports = new ReviewValidationSchema();
