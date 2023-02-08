const dbs = require("../../config/db.config");
const userRoleData = require("./user_role.query");

const userRoleDB = userRoleData({ dbs });

module.exports = userRoleDB;
