const skuDB = require("../../data-access/sku/index");
const skuEntity = require("../../entities/sku/index");

const addSku = require("./add-sku.usecase");
const editSku = require("./edit-sku.usecase");
const viewSku = require("./view-sku.usecase");
const viewAllSku = require("./view-all-sku.usecase");
const softDelSku = require("./delete-sku.usecase");

const addSkuUseCase = addSku({
  skuDB,
  skuEntity
});
const editSkuUseCase = editSku({
  skuDB,
  skuEntity
});
const viewSkuUseCase = viewSku({ skuDB });
const viewAllSkuUseCase = viewAllSku({ skuDB });
const softDeleteSkuUseCase = softDelSku({ skuDB });

const skuService = Object.freeze({
  addSkuUseCase,
  editSkuUseCase,
  viewSkuUseCase,
  viewAllSkuUseCase,
  softDeleteSkuUseCase
});

module.exports = skuService;

module.exports = {
  addSkuUseCase,
  editSkuUseCase,
  viewSkuUseCase,
  viewAllSkuUseCase,
  softDeleteSkuUseCase
};
