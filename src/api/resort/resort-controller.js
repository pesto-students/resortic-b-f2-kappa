const resortService = require("./resort-service");

class ResortController {
  displaySingleResort = async (req, res) => {
    try {
      return await resortService._displaySingleResortService(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error });
    }
  };

  insertResortDetails = async (req, res) => {
    try {
      return await resortService._insertResortServices(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error });
    }
  };

  updateResortDetails = async (req, res) => {
    try {
      return await resortService._updateResortServices(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error });
    }
  };

  fetchResortByCity = async (req, res) => {
    try {
      return await resortService._fetchResortByCity(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error });
    }
  };

  fetchCityByCategory = async (req, res) => {
    try {
      return await resortService._fetchCityByCategory(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error });
    }
  };

  fetchTopTenResort = async (req, res) => {
    try {
      return await resortService._fetchTopTenResort(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error });
    }
  };

  searchResort = async (req, res) => {
    try {
      return await resortService._searchResort(req, res);
    } catch (error) {
      res.status(400).json({ success: false, msg: error });
    }
  };
}

module.exports = new ResortController();
