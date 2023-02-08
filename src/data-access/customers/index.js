const dbs = require("../../config/db.config");
const customerData = require("./customers.query");

const customerDB = customerData({ dbs });

module.exports = customerDB;
