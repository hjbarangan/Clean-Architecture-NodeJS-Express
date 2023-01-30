
const makeDb = require("../../config/db.config");
const db = require("./billing.query");

const billingDB = makeDb ({ db });

module.exports = billingDB;
