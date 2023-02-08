const dbs = require("../../config/db.config");
const skuData = require("./sku.query");
const skuDB = skuData({ dbs });

module.exports = skuDB;
