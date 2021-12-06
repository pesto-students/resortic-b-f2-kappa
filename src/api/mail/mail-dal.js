const sandGridMail = require("../../../config/nodemailer-config");

class MailDal {
  sendMail = (req, res) => {
    sandGridMail
      .send({
        to: "sahu.sachikanta02@gmail.com",
        from: "sahu.sachikanta7@gmail.com",
        subject: "Test mail using sandgrid",
        html: "<h1>Success</h1>",
      })
      .then((response) => {
        console.log(response);
        res.json("Mail send");
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

module.exports = new MailDal();
