const dbs = require("../../config/db.config");
const partData = require("./part.query");

const partDB = partData({ dbs });

module.exports = partDB;
