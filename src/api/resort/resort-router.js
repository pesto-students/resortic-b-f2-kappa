const express = require("express");

const resortController = require("./resort-controller");

const resortRouter = express.Router();

resortRouter.get("/singleResort/:id", resortController.displaySingleResort);

resortRouter.post("/insertResortDetails", resortController.insertResortDetails);

resortRouter.put(
  "/updateResortDetails/:id",
  resortController.updateResortDetails
);

resortRouter.get("/fetchByCity/:city", resortController.fetchResortByCity);

resortRouter.get("/fetchCityByCategory", resortController.fetchCityByCategory);

module.exports = resortRouter;
