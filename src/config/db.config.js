require("dotenv").config();
const Pool = require("pg").Pool;

// if (process.env.NODE_ENV === "test") {
//   process.env.PG_DATABASE = car_dealership_test_database;
// }

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_USERPASS,
  port: "5432", //default port
});

const dbFunction = () => {
  try {
    return pool;
  } catch (error) {
    pool.end();
    console.error("Connection Error:", error);
  }
};

const dbConnection = ({ db }) => {
  return db({ dbFunction });
};

module.exports = dbConnection;
