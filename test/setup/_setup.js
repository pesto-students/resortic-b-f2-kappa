const bodyParser = require("body-parser");
const express = require("express");
const mapRoutes = require("express-routes-mapper");

const config = require("../../config/");
const database = require("../../config/database");
const auth = require("../../src/policies/auth.policy");

const beforeAction = async () => {
  const testapp = express();
  const mappedOpenRoutes = mapRoutes(config.publicRoutes, "src/api/");
  const mappedAuthRoutes = mapRoutes(config.privateRoutes, "src/api/");

  testapp.use(bodyParser.urlencoded({ extended: false }));
  testapp.use(bodyParser.json());

  testapp.all("/private/*", (req, res, next) => auth(req, res, next));
  testapp.use("/public", mappedOpenRoutes);
  testapp.use("/private", mappedAuthRoutes);

  await database.authenticate();
  // await database.drop();
  await database
    .sync()
    .then(() =>
      console.log(
        "Connection to the database has been established successfully"
      )
    );

  return testapp;
};

const afterAction = async () => {
  await database.close();
};

module.exports = { beforeAction, afterAction };
