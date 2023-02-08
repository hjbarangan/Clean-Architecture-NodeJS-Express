const dbs = require("../../config/db.config");
const serviceData = require("./service.query");

const serviceDB = serviceData({ dbs });

module.exports = serviceDB;
