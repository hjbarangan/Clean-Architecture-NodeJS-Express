const makeDb = require("../../config/db.config");
const db = require("./users.query");
// const { encryptPassword, comparePassword, jwtGenerate } = require("../../utils/index");
const  encryptPass1  = require("../../utils/encryptPass");

const userDB = makeDb({ db, encryptPass1 });

module.exports = userDB;
