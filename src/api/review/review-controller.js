const ReviewService = require("./review-service");
class reviewController {
  addReview = async (req, res) => {
    try {
      if (!req.body.feedback) throw new Error("Review cannot be empty!");
      return await ReviewService._addReview(req, res);
    } catch (error) {
      res.status(200).json({ success: false, msg: error });
    }
  };

  updateReview = async (req, res) => {
    try {
      if (!req.body.feedback) throw new Error("Review cannot be empty!");
      return await ReviewService._updateReview(req, res);
    } catch (error) {
      res.status(200).json({ success: false, msg: error });
    }
  };

  deleteReview = async (req, res) => {
    try {
      return await ReviewService._deleteReview(req, res);
    } catch (error) {
      res.status(200).json({ success: false, msg: error });
    }
  };

  getReview = async (req, res) => {
    try {
      return await ReviewService._getReview(req, res);
    } catch (error) {
      res.status(200).json({ success: false, msg: error });
    }
  };
}

module.exports = new reviewController();
