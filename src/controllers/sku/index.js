const {
  addSkuUseCase,
  editSkuUseCase,
  viewSkuUseCase,
  viewAllSkuUseCase,
  softDeleteSkuUseCase
} = require("../../use-cases/sku/index");

const addSkuController = require("./add-sku.controller");
const editSkuController = require("./edit-sku.controller");
const fetchAllSkusController = require("./get-all-sku.controller");
const fetchSkuDetailsController = require("./get-sku-details.controller");
const deleteSkuController = require("./soft-delete-sku.controller");

const postSkuController = addSkuController({
  addSkuUseCase
});
const putSkuController = editSkuController({
  editSkuUseCase
});
const getAllSkuController = fetchAllSkusController({
  viewAllSkuUseCase
});
const getSkuByIdController = fetchSkuDetailsController({
  viewSkuUseCase
});

const softDeleteSkuController = deleteSkuController({
  softDeleteSkuUseCase
});

const controller = Object.freeze({
  postSkuController,
  putSkuController,
  getAllSkuController,
  getSkuByIdController,
  softDeleteSkuController
});

module.exports = controller;

module.exports = {
  postSkuController,
  putSkuController,
  getSkuByIdController,
  getAllSkuController,
  softDeleteSkuController
};
