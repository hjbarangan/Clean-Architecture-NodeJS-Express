const carData = require("./cars.query");

const dbConnection = require("../../config/db.config");

const carDB = dbConnection({ carData });

module.exports = carDB;
