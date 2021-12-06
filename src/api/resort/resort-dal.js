const ResortTable = require("../../Modal/resort_modal");
const UserTable = require("../../Modal/user_modal");
const ReviewTable = require("../../Modal/review_modal");
const AminitiesTable = require("../../Modal/amenities_modal");
const LocationCategoryTable = require("../../Modal/location_category_modal");
const LocationCityCategoryTable = require("../../Modal/location_city_category_modal");

class ResortDAL {
  displaySingleResort = (req, res) => {
    return ResortTable.findByPk(req.params.id, {
      include: {
        model: ReviewTable,
        include: { model: UserTable, attributes: ["firstName"] },
      },
    })
      .then((resortData) => {
        return resortData;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  insertResortDetails = (req, res) => {
    return ResortTable.create(
      {
        ...req.body,
        amenitiestables: req.body.aminities,
      },
      { include: AminitiesTable }
    )
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
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
        console.log(err);
      });
  };

  fetchResortByCity = (req, res) => {
    const city = req.params.city;
    return ResortTable.findAll({
      attributes: ["resortName", "city", "startingPrice", "majorAminities"],
      where: {
        city: city,
      },
      include: { model: ReviewTable, attributes: ["rating"] },
    })
      .then((resortData) => {
        return resortData;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchCityByCategory = (req, res) => {
    const category = req.body;
    return LocationCategoryTable.findOne({
      where: category,
      include: { model: LocationCityCategoryTable, attributes: ["city"] },
    })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

module.exports = new ResortDAL();
