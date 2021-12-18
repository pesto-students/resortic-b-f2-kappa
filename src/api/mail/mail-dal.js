const sandGridMail = require("../../../config/nodemailer-config");

class MailDal {
  sendMail = (data) => {
    const {to,id,name,resortname,address,checkin,checkout,Adults,Children,roomcount,roomtype,Package,Amount,contact,mail} = data;
    const subject = `Trip to ${resortname} confirmed`

    let htmlTemplate = `
    <!DOCTYPE html>
    <html>
      <body style="padding-left: 1em;">
          <p>Hi ${name},</p>
          <p><strong> Your booking was confirmed. 😎</strong></p>
          <p>Details of Booking</p>
          <div style="padding-left: 1em;">
            <p><strong>Booking ID :</strong><span style="padding-left: 3em;"></span>${id}</p>
            <p><strong>Resort :</strong><span style="padding-left: 5em;"></span>${resortname}</p>
            <p><strong>Address :</strong><span style="padding-left: 4.3em;"></span>${address}</p>
            <p><strong>Check In :</strong><span style="padding-left: 4em;"></span>${checkin}</p>
            <p><strong>Check Out :</strong><span style="padding-left: 3em;"></span>${checkout}</p>
            <p><strong>Adults :</strong><span style="padding-left: 5em;"></span>${Adults}</p>
            <p><strong>Children :</strong><span style="padding-left: 4em;"></span>${Children}</p>
            <p><strong>Room :</strong><span style="padding-left: 5em;"></span>${roomcount} ${roomtype}</p>
            <p><strong>Package :</strong><span style="padding-left: 4em;"></span>${Package}</p>
            <p><strong>Amount Paid :</strong><span style="padding-left: 2em;"></span>₹${Amount}</p>
        </div>
        <br>
        Please approach the reception with the alloted booking Id and you will be guided to the alloted rooms.
        <p>Contact resort at <br><strong>Mobile: </strong>+91-${contact} <br><strong>Mail: </strong>${mail}</p>
        <p>To view all your bookings go to our Website, after logging in go to Manage bookings.</p>
        <p>We hope you have a pleasent stay and make a tonne of memories.<br>Thank you for booking with us.<br>We hope to see you agan for your next adventure.</p>
      </body>
    </html>
    `;


    sandGridMail
      .send({
        to: to,
        from: "resortic@quickat.work",
        subject: subject,
        html: htmlTemplate,
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
