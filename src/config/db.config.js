const dotenv = require("dotenv");
const pg = require("pg");
dotenv.config();

const config = {
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE,
  password: process.env.PG_USERPASS,
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
    pool.end();
    console.log("Errors: ", e);
  }
}

module.exports = dbs;
