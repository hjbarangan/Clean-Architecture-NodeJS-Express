const {
  viewAllProductsUseCase,
  addQuotationUseCase
} = require("../../use-cases/quotation/index");

// const editSkuController = require("./edit-sku.controller");
// const fetchAllSkusController = require("./get-all-sku.controller");
// const fetchSkuDetailsController = require("./get-sku-details.controller");
// const deleteSkuController = require("./soft-delete-sku.controller");

////// const postSkuController = addSkuController({
/////   addSkuUseCase
//// });
///// const putSkuController = editSkuController({
/////   editSkuUseCase
///// });
//// const getAllSkuController = fetchAllSkusController({
////   viewAllSkuUseCase
////// });
//// const getSkuByIdController = fetchSkuDetailsController({
////   viewSkuUseCase
///// });

//// const softDeleteSkuController = deleteSkuController({
//// softDeleteSkuUseCase
///// });
const addQuotationController = require("./add-quotation.controller");
const fetchAllProductsController = require("./get-all-products.controller");

const postQuotationController = addQuotationController({ addQuotationUseCase });
const getAllProductsController = fetchAllProductsController({
  viewAllProductsUseCase
});

const controller = Object.freeze({
  postQuotationController,
  getAllProductsController
});

module.exports = controller;

module.exports = {
  postQuotationController,
  getAllProductsController
};
