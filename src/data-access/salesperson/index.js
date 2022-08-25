
const makeDb = require("../../config/db.config");
const db = require("./salesperson.query");

const salespersonDB = makeDb ({ db });

module.exports = salespersonDB;
