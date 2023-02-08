const dbs = require("../../config/db.config");
const userData = require("./users.query");

const { encryptPassword } = require("../../utils/index");
const userDB = userData({ dbs, encryptPassword });

module.exports = userDB;
