const resortService = require("./resort-service");

class ResortController {
  displaySingleResort = async (req, res) => {
    return await resortService.displaySingleResortService(req, res);
  };

  insertResortDetails = async (req, res) => {
    return await resortService.insertResortServices(req, res);
  };

  updateResortDetails = async (req, res) => {
    return await resortService.updateResortServices(req, res);
  };

  fetchResortByCity = async (req, res) => {
    return await resortService.fetchResortByCity(req, res);
  };

  fetchCityByCategory = async (req, res) => {
    return await resortService.fetchCityByCategory(req, res);
  };
}

module.exports = new ResortController();
