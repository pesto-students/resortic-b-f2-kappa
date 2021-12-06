const resortDal = require("./resort-dal");

class resortService {
  displaySingleResortService = async (req, res) => {
    const data = await resortDal.displaySingleResort(req, res);
    res.status(200).json({ success: true, value: data });
  };

  insertResortServices = async (req, res) => {
    const data = await resortDal.insertResortDetails(req, res);
    res.status(200).json({ success: true, value: data });
  };

  updateResortServices = async (req, res) => {
    const updatedData = await resortDal.updateResortDetails(req, res);
    res.status(200).json({ success: true, value: updatedData });
  };

  fetchResortByCity = async (req, res) => {
    const resortList = await resortDal.fetchResortByCity(req, res);
    res.status(200).json({ success: true, value: resortList });
  };

  fetchCityByCategory = async (req, res) => {
    const arrData = await resortDal.fetchCityByCategory(req, res);
    res.status(200).json({ success: true, value: arrData });
  };
}

module.exports = new resortService();
