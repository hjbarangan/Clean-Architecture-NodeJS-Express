const dbs = require("../../config/db.config");
const invoiceData = require("./invoice.query");

const invoiceDB = invoiceData({ dbs });

module.exports = invoiceDB;
