const dbs = require("../../config/db.config");
const mechanicData = require("./mechanic.query");

const mechanicDB = mechanicData({ dbs });

module.exports = mechanicDB;
