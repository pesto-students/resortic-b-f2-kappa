var crypto = require("crypto");

const createSHA1 = (sVal="") => {
  var shasum = crypto.createHash('sha1');
  shasum.update(sVal);
  return shasum.digest('hex');
};

const validateEmail = (email = "Sankgmail.com") => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
};

const validatMobile = (mobile = "0000000000") => {
  const regex =
    /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;

  return regex.test(mobile);
};

const getCurrentTimestamp = () => {
  return Math.floor(new Date() / 1000);
};

module.exports = {
  createSHA1,
  validateEmail,
  validatMobile,
  getCurrentTimestamp,
};
