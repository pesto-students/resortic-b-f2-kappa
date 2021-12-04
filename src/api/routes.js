const Router = require("express").Router;

const app = Router();

const userRouter = require("./user/user-router");
const resortRouter = require("./resort/resort-router");
const adminRouter = require("./admin-s/admin-router");

app.use("/user", userRouter);

app.use("/resort", resortRouter);

app.use("/admin", adminRouter);

module.exports = app;
