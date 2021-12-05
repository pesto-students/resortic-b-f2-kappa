const LocationCategoryTable = require("../../Modal/location_category_modal");
const LocationCityCategoryTable = require("../../Modal/location_city_category_modal");

class AdminDAL {
  insertCategory = (req, res) => {
    return LocationCategoryTable.create(req.body)
      .then((insertedData) => {
        return insertedData;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addCityToCategory = (req, res) => {
    const obj = req.body;
    return LocationCityCategoryTable.create(obj)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

module.exports = new AdminDAL();
