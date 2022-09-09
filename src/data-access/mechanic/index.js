
const makeDb = require("../../config/db.config");
const db = require("./mechanic.query");

const mechanicDB = makeDb ({ db });

module.exports = mechanicDB;
