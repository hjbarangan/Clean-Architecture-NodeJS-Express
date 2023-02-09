const invoiceDB = require("../../data-access/invoice/index");
const invoiceEntity = require("../../entities/invoice/index");

const createInvoice = require("./add-invoice.usecase");
const viewInvoice = require("./view-invoice.usecase");
const viewAllInvoices = require("./view-all-invoice.usecase");

const createInvoiceUseCase = createInvoice({ invoiceDB, invoiceEntity });
const viewInvoiceUseCase = viewInvoice({ invoiceDB, invoiceEntity });
const viewAllInvoicesUseCase = viewAllInvoices({
  invoiceDB,
  invoiceEntity
});

module.exports = {
  createInvoiceUseCase,
  viewInvoiceUseCase,
  viewAllInvoicesUseCase
};
