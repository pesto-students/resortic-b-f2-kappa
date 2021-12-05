const Router = require("express").Router;

const app = Router();

const authService = require("../services/auth.service");
// const { verify } = authService();
const verify = require("../policies/auth.policy");

const userRouter = require("./user/user-router");
const reviewRouter = require("./review/review-router");
const loginRouter = require("./login/login-router");
const paymentRouter = require("./payment/payment-router");
// app.use(verify);
app.use("/user", userRouter);
app.use("/review", reviewRouter);
app.use("/login", loginRouter);

app.use("/payment", paymentRouter);

const userRouter = require("./user/user-router");
const resortRouter = require("./resort/resort-router");
const adminRouter = require("./admin-s/admin-router");

app.use("/user", userRouter);

app.use("/resort", resortRouter);

app.use("/admin", adminRouter);

module.exports = app;
