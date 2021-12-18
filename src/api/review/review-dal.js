const ReviewTable = require("../../Modal/review_modal");
const { getCurrentTimestamp, createSHA1 } = require("../utils");
class reviewDAL {
  addReview = async (req, res) => {
    const { body } = req;
    body.id = "REV-" + createSHA1(body.feedback);
    body.createdAt = getCurrentTimestamp();
    body.updatedAt = getCurrentTimestamp();
    return await ReviewTable.create(body)
      .then((data) => {
        console.log("data", data);
        return { msg: "Review added successfully.", data: data };
      })
      .catch((err) => {
        return { err: err };
      });
  };

  updateReview = async (req, res) => {
    const { body } = req;
    body.updatedAt = getCurrentTimestamp();
    return await ReviewTable.update(body, {
      where: {
        id: body.id,
        usertableId: body.usertableId,
        resorttableId: body.resorttableId,
        is_deleted: false,
      },
    })
      .then((data) => {
        console.log("data", data);
        return { msg: "Review updated successfully.", data: data };
      })
      .catch((err) => {
        return { err: err };
      });
  };

  deleteReview = async (req, res) => {
    const { body } = req;
    body.updatedAt = getCurrentTimestamp();
    return await ReviewTable.update(
      { is_deleted: true },
      {
        where: {
          id: body.id,
          usertableId: body.usertableId,
          resorttableId: body.resorttableId,
        },
      }
    )
      .then((data) => {
        return { msg: "Review deleted successfully.", data: data };
      })
      .catch((err) => {
        return { err: err };
      });
  };

  getReview = async (req, res) => {
    const { usertableId, resorttableId } = req.query;
    return await ReviewTable.findAll({
      where: { resorttableId: resorttableId },
    }).then((data) => {
      return data;
    });
  };
}

module.exports = new reviewDAL();
