const makeDb = require("../../config/db.config");
const db = require("./users.query");

const { encryptPassword, comparePassword, jwtGenerate } = require("../../utils/index");
const userDB = makeDb({ db, encryptPassword, comparePassword, jwtGenerate });

module.exports = userDB;
