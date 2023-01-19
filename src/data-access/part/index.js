
const makeDb = require("../../config/db.config");
const db = require("./part.query");

const partDB = makeDb ({ db });

module.exports = partDB;
