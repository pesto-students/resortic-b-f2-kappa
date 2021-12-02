const Router = require("express").Router;

const app = Router();

const userRouter = require("./user/user-router");

app.use("/user", userRouter);

module.exports = app;
