const Router = require("express").Router;

const app = Router();

const bookingRouter = require("./booking/booking-router");

app.use("/booking", bookingRouter);

module.exports = app;
