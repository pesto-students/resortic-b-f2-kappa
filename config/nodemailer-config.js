const sandGridMail = require("@sendgrid/mail");

sandGridMail.setApiKey(process.env.SEND_GRID);

module.exports = sandGridMail;
