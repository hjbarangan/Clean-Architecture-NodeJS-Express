
const makeDb = require("../../config/db.config");
const db = require("./user_role.query");

const userRoleDB = makeDb ({ db });

module.exports = userRoleDB;
