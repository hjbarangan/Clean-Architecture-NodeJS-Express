const dbs = require("../../config/db.config");
const dashboardData = require("./dashboard.query");

const dashboardDB = dashboardData({ dbs });

module.exports = dashboardDB;
