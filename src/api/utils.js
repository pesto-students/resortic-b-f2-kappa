var crypto = require("crypto");
const dayjs = require("dayjs");

class Utils {
  createSHA1 = (sVal = "") => {
    var shasum = crypto.createHash("sha1");
    shasum.update(sVal);
    return shasum.digest("hex");
  };

  validateEmail = (email = "Sankgmail.com") => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(email);
  };

  validatMobile = (mobile = "0000000000") => {
    const regex =
      /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;

    return regex.test(mobile);
  };

  validateStatus = (status = "") => {
    var acceptStatus = ["Reserved", "Booked", "Cancelled", "Completed"];
    return acceptStatus.includes(status);
  };

  getCurrentTimestamp = () => {
    return dayjs(new Date()).unix();
  };
}

module.exports = new Utils();
