const makeDb = require("../../config/db.config");
const db = require("./users.query");
const { encryptPassword } = require("../../utils/index");

// const  encrypt  = require("../../utils/encryptPass");

const userDB = makeDb({ db, encryptPassword });

module.exports = userDB;
