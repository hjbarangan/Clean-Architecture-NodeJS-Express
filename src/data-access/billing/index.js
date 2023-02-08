const dbs = require("../../config/db.config");
const billingData = require("./billing.query");

const billingDB = billingData({ dbs });

module.exports = billingDB;
