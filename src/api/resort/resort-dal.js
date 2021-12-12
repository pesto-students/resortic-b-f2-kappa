const ResortTable = require("../../Modal/resort_modal");
const UserTable = require("../../Modal/user_modal");
const ReviewTable = require("../../Modal/review_modal");
const AminitiesTable = require("../../Modal/amenities_modal");
const LocationCategoryTable = require("../../Modal/location_category_modal");
const LocationCityCategoryTable = require("../../Modal/location_city_category_modal");
const RoomTable = require("../../modal/room_modal");
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
    // const category = req.body;
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
}

module.exports = new ResortDAL();
