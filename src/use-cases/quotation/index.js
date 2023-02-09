const quotationDB = require("../../data-access/quotation/index");
const quotationEntity = require("../../entities/quotation/index");
const viewAllProducts = require("./view-all-products.usecase");
const addQuotation = require("./add-quotation.usecase");
const viewAllQuotations = require("./view-all-quotations.usecase");
const viewQuotation = require("./view-quotation.usecase");

const viewAllProductsUseCase = viewAllProducts({ quotationDB });
const addQuotationUseCase = addQuotation({ quotationDB, quotationEntity });
const viewAllQuotationsUseCase = viewAllQuotations({ quotationDB });
const viewQuotationUseCase = viewQuotation({ quotationDB });

module.exports = {
  viewAllProductsUseCase,
  addQuotationUseCase,
  viewAllQuotationsUseCase,
  viewQuotationUseCase
};
