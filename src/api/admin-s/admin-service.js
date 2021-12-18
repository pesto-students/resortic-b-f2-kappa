const Joi = require("joi");
const AdminDAL = require("./admin-dal");

class AdminService {
  insertCategory = async (req, res) => {
    // const schema = Joi.object({
    //   category_name: Joi.string().alphanum().min(3).required(),
    // });

    // console.log(await schema.validateAsync(req.body));

    // schema
    //   .validateAsync({ category_name: req.body.category_name })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log("error", err);
    //   });

    const data = await AdminDAL.insertCategory(req, res);
    res.status(200).json({ success: true, value: data });
  };

  addCityToCategory = async (req, res) => {
    const data = await AdminDAL.addCityToCategory(req, res);
    res.status(200).json({ success: true, value: data });
  };
}

module.exports = new AdminService();
