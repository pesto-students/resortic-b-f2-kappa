const express = require("express");
const AdminController = require("./admin-controller");

const app = express.Router();

app.post("/insertCategory", AdminController.insertCategory);

app.post("/addCityToCategory", AdminController.addCityToCategory);

module.exports = app;
