const express = require("express");

const router = express.Router();
const UserController = require("./user-controller");

router.post("/register", UserController.register);
router.get("/get", UserController.getUser);
router.post("/update", UserController.updateUser);
router.post("/delete", UserController.deleteUser);

module.exports = router;
