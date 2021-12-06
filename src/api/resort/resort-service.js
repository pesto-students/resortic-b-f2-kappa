const resortDal = require("./resort-dal");

class resortService {
  _displaySingleResortService = async (req, res) => {
    try {
      const data = await resortDal.displaySingleResort(req, res);
      res.status(200).json({ success: true, value: data });
    } catch (error) {
      return res.status(404).send({ error });
    }
  };

  _insertResortServices = async (req, res) => {
    try {
      const data = await resortDal.insertResortDetails(req, res);
      res.status(200).json({ success: true, value: data });
    } catch (error) {
      return res.status(404).send({ error });
    }
  };

  _updateResortServices = async (req, res) => {
    try {
      const updatedData = await resortDal.updateResortDetails(req, res);
      res.status(200).json({ success: true, value: updatedData });
    } catch (error) {
      return res.status(404).send({ error });
    }
  };

  _fetchResortByCity = async (req, res) => {
    try {
      const resortList = await resortDal.fetchResortByCity(req, res);
      res.status(200).json({ success: true, value: resortList });
    } catch (error) {
      return res.status(404).send({ error });
    }
  };

  _fetchCityByCategory = async (req, res) => {
    try {
      const arrData = await resortDal.fetchCityByCategory(req, res);
      res.status(200).json({ success: true, value: arrData });
    } catch (error) {
      return res.status(404).send({ error });
    }
  };
}

module.exports = new resortService();
