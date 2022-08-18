
const makeDb = require("../../config/db.config");
const db = require("./customers.query");

const customerDB = makeDb ({ db });

module.exports = customerDB;
