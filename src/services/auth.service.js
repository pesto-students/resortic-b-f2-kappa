const jwt = require("jsonwebtoken");

const secret =
  process.env.NODE_ENV === "production" ? process.env.JWT_SECRET : "secret";

const authService = () => {
  const createJWT = (payload) => jwt.sign(payload, secret, { expiresIn: 3600 });
  const verify = (token, cb) => jwt.verify(token, secret, {}, cb);
  // const verify = (req, res, next) => {
  //   const token = req.header("Authorization");
  //   if (!token) return res.status(401).send("Access Denied");
  //   try {
  //     const verified = jwt.verify(token, secret);
  //     req.user = verified;
  //     next();
  //   } catch (error) {
  //     res.status(400).send("Invalid token");
  //   }
  // };

  return {
    createJWT,
    verify,
  };
};

module.exports = authService;
