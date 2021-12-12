const jwt = require("jsonwebtoken");

const secret =
  process.env.NODE_ENV === "production" ? process.env.JWT_SECRET : "secret";

const authService = () => {

  const createJWT = (payload) => jwt.sign(payload, secret, { expiresIn: 18000 });
  const verify = (token, cb) => jwt.verify(token, secret, {}, cb);

  return {
    createJWT,
    verify,
  };
};

module.exports = authService;
