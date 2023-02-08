const {
  createInvoiceUseCase,
  viewInvoiceUseCase,
  viewAllInvoicesUseCase
} = require("../../use-cases/invoice/index");

const createInvoiceController = require("./add-invoice.controller");
const fetchInvoiceDetailsController = require("./get-invoice-details.controller");
const fetchAllInvoicesController = require("./get-all-invoice.controller");

const postInvoiceController = createInvoiceController({ createInvoiceUseCase });
const getAllInvoicesController = fetchAllInvoicesController({
  viewAllInvoicesUseCase
});
const getInvoiceByIdController = fetchInvoiceDetailsController({
  viewInvoiceUseCase
});

module.exports = Object.freeze({
  postInvoiceController,
  getAllInvoicesController,
  getInvoiceByIdController
});
