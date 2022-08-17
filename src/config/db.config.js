// require("dotenv").config();
// const Pool = require("pg").Pool;

// // if (process.env.NODE_ENV === "test") {
// //   process.env.PG_DATABASE = car_dealership_test_database;
// // }

// const pool = new Pool({
//   user: process.env.PG_USER,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   password: process.env.PG_USERPASS,
//   port: "5432", //default port
// });

// // const dbFunction = () => {
// //   try {
// //     return pool;
// //   } catch (error) {
// //     pool.end();
// //     console.error("Connection Error:", error);
// //   }
// // };

// async function dbFunction() {
//   try {
//     return pool;
//   } catch (e) {
//     pool.end(); // end connection
//     console.log("Errors: ", e);
//   }
// }

// const dbs = ({ db }) => {
//   return db({ dbFunction });
// };

// module.exports = dbs;

const dotenv = require("dotenv");
const pg = require("pg");
dotenv.config();

const config = {
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE,
  password: process.env.PG_USERPASS,
  port: process.env.PG_PORT,
  host: process.env.PG_HOST,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
};


const pool = new pg.Pool(config);

async function dbs() {
  try {
    return pool;
  } catch (e) {
    pool.end(); // end connection
    console.log("Errors: ", e);
  }
}

const makeDb = ({ db }) => {
  return db({ dbs });
};

module.exports = makeDb;
