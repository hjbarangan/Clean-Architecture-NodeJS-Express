const {
  viewAllProductsUseCase,
  addBillingUseCase,
  viewAllBillingsUseCase,
  viewBillingUseCase
} = require("../../use-cases/billing/index");

const addBillingController = require("./add-billing.controller");
const fetchAllProductsController = require("./get-all-products.controller");
const fetchAllBillingsController = require("./get-all-billings.controller");
const fetchBillingDetailsController = require("./get-billing-details.controller");

const postBillingController = addBillingController({ addBillingUseCase });
const getAllProductsController = fetchAllProductsController({
  viewAllProductsUseCase
});
const getAllBillingsController = fetchAllBillingsController({
  viewAllBillingsUseCase
});
const getBillingByIdController = fetchBillingDetailsController({
  viewBillingUseCase
});
const controller = Object.freeze({
  postBillingController,
  getAllProductsController,
  getAllBillingsController,
  getBillingByIdController
});

module.exports = controller;

module.exports = {
  postBillingController,
  getAllProductsController,
  getAllBillingsController,
  getBillingByIdController
};
