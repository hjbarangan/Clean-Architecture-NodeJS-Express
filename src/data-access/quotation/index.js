
const makeDb = require("../../config/db.config");
const db = require("./quotation.query");

const quotationDB = makeDb ({ db });

module.exports = quotationDB;
