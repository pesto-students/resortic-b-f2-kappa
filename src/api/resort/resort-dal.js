const Sequelize = require("sequelize");
const database = require("../../../config/database");
const ResortTable = require("../../Modal/resort_modal");
const UserTable = require("../../Modal/user_modal");
const ReviewTable = require("../../Modal/review_modal");
const AminitiesTable = require("../../Modal/amenities_modal");
const LocationCategoryTable = require("../../Modal/location_category_modal");
const LocationCityCategoryTable = require("../../Modal/location_city_category_modal");
const RoomTable = require("../../Modal/room_modal");
const utils = require("../utils");

class ResortDAL {
  displaySingleResort = (req, res) => {
    return ResortTable.findByPk(req.params.id, {
      include: [
        {
          model: ReviewTable,
          include: { model: UserTable, attributes: ["first_name"] },
        },
        {
          model: RoomTable,
        },
        {
          model: AminitiesTable,
        },
      ],
    })
      .then((resortData) => {
        return resortData;
      })
      .catch((err) => {
        return err;
      });
  };

  insertResortDetails = (req, res) => {
    console.log(req.body);
    return ResortTable.create(
      {
        id: "RST-" + utils.createSHA1("RESORT" + req.body.resort_name),
        ...req.body,
        amenitiestables: req.body.aminities,
        roomtables: req.body.room_type,
      },
      { include: [{ model: AminitiesTable }, { model: RoomTable }] }
    )
      .then((data) => {
        return data;
      })
      .catch((err) => {
        // console.log(err);
        return err;
      });
  };

  updateResortDetails = (req, res) => {
    const resortID = req.params.id;
    return ResortTable.findByPk(resortID, { include: AminitiesTable })
      .then((resortData) => {
        console.log(resortData);
        resortData.set({
          ...req.body,
          amenitiestables: req.body.aminities,
        });
        return resortData.save();
      })
      .then((updateData) => {
        return updateData;
      })
      .catch((err) => {
        return err;
      });
  };

  fetchResortByCity = (req, res) => {
    const city = req.query.city;
    return ResortTable.findAll({
      attributes: [
        "id",
        "resort_name",
        "city",
        "starting_price",
        "major_aminities",
      ],
      where: {
        city: city,
      },
      include: { model: ReviewTable, attributes: ["rating"] },
    })
      .then((resortData) => {
        console.log(resortData);
        return resortData;
      })
      .catch((err) => {
        return err;
      });
  };

  fetchCityByCategory = (req, res) => {
    const category = req.body;
    return LocationCategoryTable.findAll({
      include: { model: LocationCityCategoryTable, attributes: ["city"] },
    })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  };

  fetchTopTenResort = (req, res) => {
    return ResortTable.findAll({
      include: { model: ReviewTable, attributes: ["rating"] },
      attributes: ["id", "resort_name", "city", "starting_price"],
    })
      .then((resorts) => {
        return resorts;
      })
      .catch((err) => {
        return err;
      });
  };

  searchResorts = async (req, res) => {
    var ci = req.query.ci;
    var co = req.query.co;
    var city = req.query.city;
    var rooms = req.query.rooms;

    const data = await database.query(
      "SELECT  (SELECT SUM(quantity) FROM resortic_schema.roomtables AS rm JOIN resortic_schema.resortroomtables AS rr ON rm.id = rr.roomtableId WHERE resorttableId = r.id ) - SUM(IFNULL(rooms_count,0)) AS availableRooms ,r.id AS id, r.resort_name AS resort_name, r.city, r.starting_price,r.major_aminities FROM resortic_schema.bookingtables AS outbook RIGHT JOIN resortic_schema.resorttables AS r ON outbook.resorttableId = r.id WHERE ((IFNULL(check_in, $1) BETWEEN  $1 AND $2) OR  (IFNULL(check_out, $1) BETWEEN  $1 AND $2)) AND r.city LIKE $3 GROUP BY r.id HAVING availableRooms > $4;",
      { type: Sequelize.QueryTypes.SELECT, bind: [ci,co,city,rooms] }

    );

    return data;
  };
}

module.exports = new ResortDAL();
