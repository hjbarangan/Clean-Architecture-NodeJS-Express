
const makeDb = require("../../config/db.config");
const db = require("./invoice.query");

const invoiceDB = makeDb ({ db });

module.exports = invoiceDB;
