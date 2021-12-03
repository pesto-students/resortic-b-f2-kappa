const Router = require("express").Router;

const app = Router();

const userRouter = require("./user/user-router");
const reviewRouter = require("./review/review-router");

app.use("/user", userRouter);
app.use("/review", reviewRouter);

module.exports = app;
