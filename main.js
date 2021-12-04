/**
 * third party libraries
 */
const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const http = require("http");
const cors = require("cors");

require("dotenv").config();

/**
 * server configuration
 */
const config = require("./config/");
const dbService = require("./src/services/db.service");
const auth = require("./src/policies/auth.policy");
const apiRoutes = require("./src/api/routes");
//  const apiRoutes = require('./src/api/user/user-router')

// const environment = development;
// , staging, testing, production
const environment = process.env.NODE_ENV;

/**
 * express application
 */
const app = express();
const server = http.Server(app);

const DB = dbService(environment, config.migrate).start();

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors());

// secure express app
app.use(
  helmet({
    dnsPrefetchControl: false,
    frameguard: false,
    ieNoOpen: false,
  })
);

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// secure your private routes with jwt authentication middleware
// ======================
const sequelize = require("./config/database");

// Database
const UserTable = require("./src/Modal/user_modal");
const RoomTable = require("./src/Modal/room_modal");
const ReviewTable = require("./src/Modal/review_modal");
const ResortTable = require("./src/Modal/resort_modal");
const PaymentTable = require("./src/Modal/payment_modal");
const CategoryTable = require("./src/Modal/category_modal");
const BookingTable = require("./src/Modal/booking_modal");
const AmenitiesTable = require("./src/Modal/amenities_modal");
const ResortAminitiesTable = require("./src/Modal/resort_aminities_modal");
const LocationCategoryTable = require("./src/Modal/location_category_modal");
const LocationCityCategoryTable = require("./src/Modal/location_city_category_modal");
//Router
// const userRouter = require("./router/router");

UserTable.hasMany(ReviewTable);
ReviewTable.belongsTo(UserTable);
ResortTable.hasMany(ReviewTable);
ReviewTable.belongsTo(ResortTable);
ResortTable.hasMany(BookingTable);
BookingTable.belongsTo(ResortTable);
UserTable.hasMany(BookingTable);
BookingTable.belongsTo(UserTable);
BookingTable.hasMany(PaymentTable);
PaymentTable.belongsTo(BookingTable);
UserTable.hasMany(PaymentTable);
PaymentTable.belongsTo(UserTable);
ResortTable.hasMany(RoomTable);
RoomTable.belongsTo(ResortTable);
AmenitiesTable.belongsToMany(ResortTable, { through: ResortAminitiesTable });
ResortTable.belongsToMany(AmenitiesTable, { through: ResortAminitiesTable });
LocationCategoryTable.hasMany(LocationCityCategoryTable);
LocationCityCategoryTable.belongsTo(LocationCategoryTable);

// app.use(userRouter);
// sequelize.sync();
// sequelize
//   .sync()
//   // .sync({ force: true })
//   .then((response) => {
//     console.log("Database is connected.");
//     app.listen(config.port, () => {
//       console.log("Server connected to PORT ", config.port);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fill routes for express application
app.use("/v1/api", apiRoutes); //app path

server.listen(config.port, () => {
  console.error(
    `NODE_ENV is set to ${environment}, but only production and development are valid.`,
    config.port
  );
  if (
    environment !== "production" &&
    environment !== "development" &&
    environment !== "testing"
  ) {
    console.error(
      `NODE_ENV is set to ${environment}, but only production and development are valid.`
    );
    process.exit(1);
  }
  return DB;
});
