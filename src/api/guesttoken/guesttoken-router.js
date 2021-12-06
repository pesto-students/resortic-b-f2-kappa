const express = require("express");

const router = express.Router();
const GuestTokenController = require("./guesttoken-controller");

router.get("/token", GuestTokenController.guestToken);

module.exports = router;
