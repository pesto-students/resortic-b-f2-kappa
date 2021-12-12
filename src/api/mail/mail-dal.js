const sandGridMail = require("../../../config/nodemailer-config");

class MailDal {
  sendMail = (body) => {
    sandGridMail
      .send({
        to: "sai.m.r.sathish@gmail.com",
        from: "sai.m.r.sathish@gmail.com",
        subject: "Test mail using sandgrid",
        html: "<h1>Success</h1>",
      })
      .then((response) => {
        console.log(response);
        // res.json("Mail send");
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

module.exports = new MailDal();
