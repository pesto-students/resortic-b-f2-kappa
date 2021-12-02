const validateEmail = (email = "Sankgmail.com") => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
};

const getCurrentTimestamp = () => {
  return Math.floor(new Date() / 1000);
};

module.exports = {
  validateEmail,
  getCurrentTimestamp,
};
