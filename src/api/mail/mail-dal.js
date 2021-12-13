const sandGridMail = require("../../../config/nodemailer-config");

class MailDal {
  sendMail = (body) => {
    sandGridMail
      .send({
        to: "sai.m.r.sathish@gmail.com",
        from: "sahu.sachikanta7@gmail.com",
        subject: "Test mail using sandgrid",
        html: "<h1>Success</h1>",
      }, function(error,info){
        if(error){
          console.log(error);
        }else{
          console.log(info)
        }
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
