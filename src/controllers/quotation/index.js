const {
  viewAllProductsUseCase,
  addQuotationUseCase,
  viewAllQuotationsUseCase,
  viewQuotationUseCase
} = require("../../use-cases/quotation/index");

const addQuotationController = require("./add-quotation.controller");
const fetchAllProductsController = require("./get-all-products.controller");
const fetchAllQuotationsController = require("./get-all-quotations.controller");
const fetchQuotationDetailsController = require("./get-quotation-details.controller");

const postQuotationController = addQuotationController({ addQuotationUseCase });
const getAllProductsController = fetchAllProductsController({
  viewAllProductsUseCase
});
const getAllQuotationsController = fetchAllQuotationsController({
  viewAllQuotationsUseCase
});
const getQuotationByIdController = fetchQuotationDetailsController({
  viewQuotationUseCase
});
const controller = Object.freeze({
  postQuotationController,
  getAllProductsController,
  getAllQuotationsController,
  getQuotationByIdController
});

module.exports = controller;

module.exports = {
  postQuotationController,
  getAllProductsController,
  getAllQuotationsController,
  getQuotationByIdController
};
