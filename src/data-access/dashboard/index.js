
const makeDb = require("../../config/db.config");
const db = require("./dashboard.query");

const dashboardDB = makeDb ({ db });

module.exports = dashboardDB;
