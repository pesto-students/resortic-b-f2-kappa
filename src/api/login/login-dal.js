const LoginTable = require("../../Modal/login_modal");
const authService = require("../../services/auth.service");
const UserTable = require("../../Modal/user_modal");
const { createJWT } = authService();
const { createSHA1, getCurrentTimestamp } = require("../utils");

const getUserDetail = async ({ mobile }) => {
  return await UserTable.findOne({
    where: {
      mobile: mobile,
    },
  }).then((data) => {
    return data;
  });
};

class LoginDAL {
  login = async (req, res) => {
    const { body } = req;
    const userData = await getUserDetail(req.body);
    if (userData === null) return { msg: "User not found", code: 404 };
    // body.issueTime = Math.floor(Date.now() / 1000);
    // body.expiryTime = Math.floor(Date.now() / 1000) + 60 * 60;
    body.createdAt = getCurrentTimestamp();
    body.updatedAt = getCurrentTimestamp();
    body.usertableId = userData.id;
    body.id = "LOG-" + createSHA1("LOGIN" + body.mobile);

    let data = {
      usertableId: body.usertableId,
    };
    data.token = createJWT({
      mobile: body.mobile,
      id: body.usertableId,
    });
    return { msg: "Logined successfully.", data: data };

    // return await LoginTable.create(body)
    //   .then((data) => {
    //     data.dataValues.token = createJWT({
    //       mobile: body.mobile,
    //       id: body.usertableId,
    //     });
    //     return { msg: "Logined successfully.", data: data };
    //   })
    //   .catch((err) => {
    //     console.log("error", err);
    //     return { err: err };
    //   });
  };

  logout = async (req, res) => {
    const { body } = req;

    return await LoginTable.destroy({
      where: {
        usertableId: body.usertableId,
      },
    })
      .then((data) => {
        return { msg: "Logout successfully.", data: data };
      })
      .catch((err) => {
        console.log("error", err);
        return { err: err };
      });
  };
}

module.exports = new LoginDAL();
