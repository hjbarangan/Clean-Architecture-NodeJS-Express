const makeDb = require("../../config/db.config");
const db = require("./users.query");
const  authService = require("../../utils/index");

// const  encrypt  = require("../../utils/encryptPass");

const userDB = makeDb({ db, authService });

module.exports = userDB;
