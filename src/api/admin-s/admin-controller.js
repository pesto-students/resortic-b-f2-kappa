const AdminService = require("./admin-service");

class AdminController {
  insertCategory = async (req, res) => {
    return await AdminService.insertCategory(req, res);
  };

  addCityToCategory = async (req, res) => {
    return await AdminService.addCityToCategory(req, res);
  };
}

module.exports = new AdminController();
