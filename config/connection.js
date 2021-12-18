const development = {
  database: "resortic_schema",
  username: "root",
  password: process.env.DB_PASS,
  host: "localhost",
  // dialect: "sqlite" || "mysql" || "postgres",
  dialect: "mysql",
};

const testing = {
  database: "resortic_schema",
  username: "root",
  password: process.env.DB_PASS,
  host: "localhost",
  // dialect: "sqlite" || "mysql" || "postgres",
  dialect: "mysql",
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || "localhost",
  // dialect: "sqlite" || "mysql" || "postgres",
  dialect: "mysql",
};

module.exports = {
  development,
  testing,
  production,
};
