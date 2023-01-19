
const makeDb = require("../../config/db.config");
const db = require("./sku.query");

const skuDB = makeDb ({ db });

module.exports = skuDB;
