const express = require("express");

const router = express.Router();
const ReviewController = require("./review-controller");

router.post("/add", ReviewController.addReview);
router.post("/update", ReviewController.updateReview);
router.post("/delete", ReviewController.deleteReview);
router.get("/get", ReviewController.getReview);

module.exports = router;
