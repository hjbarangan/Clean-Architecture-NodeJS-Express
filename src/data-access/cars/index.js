const dbs = require("../../config/db.config");
const carData = require("./cars.query");

const carDB = carData({ dbs });

module.exports = carDB;
