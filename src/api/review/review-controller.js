const ReviewService = require("./review-service");
const {
  reviewSchema,
  reviewIdSchema,
  getReviewSchema,
  updateReviewSchema,
} = require("../../validation/reviewValidationSchema");
class reviewController {
  addReview = async (req, res) => {
    try {
      const { error, value } = await reviewSchema.validateAsync(req.body);

      if (error) {
        throw new Error(error);
      }

      return await ReviewService._addReview(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error });
    }
  };

  updateReview = async (req, res) => {
    try {
      const { error, value } = await updateReviewSchema.validateAsync(req.body);

      if (error) {
        throw new Error(error);
      }

      return await ReviewService._updateReview(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error });
    }
  };

  deleteReview = async (req, res) => {
    try {
      const { error, value } = await reviewIdSchema.validateAsync(req.body);

      if (error) {
        throw new Error(error);
      }

      return await ReviewService._deleteReview(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error });
    }
  };

  getReview = async (req, res) => {
    try {
      const { error, value } = await getReviewSchema.validateAsync({
        resorttableId: req.body.resorttableId,
      });

      if (error) {
        throw new Error(error);
      }
      return await ReviewService._getReview(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error });
    }
  };
}

module.exports = new reviewController();
