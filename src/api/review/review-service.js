const ReviewDAL = require("./review-dal");

class reviewService {
  _addReview = async (req, res) => {
    try {
      let response = await ReviewDAL.addReview(req, res);
      res.status(200).json({ success: true, data: response });
    } catch (error) {}
  };

  _updateReview = async (req, res) => {
    try {
      let response = await ReviewDAL.updateReview(req, res);
      res.status(200).json({ success: true, data: response });
    } catch (error) {}
  };

  _deleteReview = async (req, res) => {
    try {
      let response = await ReviewDAL.deleteReview(req, res);
      res.status(200).json({ success: true, data: response });
    } catch (error) {}
  };

  _getReview = async (req, res) => {
    try {
      let response = await ReviewDAL.getReview(req, res);
      res.status(200).json({ success: true, data: response });
    } catch (error) {}
  };
}

module.exports = new reviewService();
