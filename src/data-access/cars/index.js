
const makeDb = require("../../config/db.config");
const db = require("./cars.query");

const carDB = makeDb ({ db });

module.exports = carDB;
