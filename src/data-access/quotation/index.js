const dbs = require("../../config/db.config");
const quotationData = require("./quotation.query");

const quotationDB = quotationData({ dbs });

module.exports = quotationDB;
