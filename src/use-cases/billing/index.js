const billingDB = require("../../data-access/billing/index");
const billingEntity = require("../../entities/billing/index");
const viewAllProducts = require("./view-all-products.usecase");
const addBilling = require("./add-billing.usecase");
const viewAllBillings = require("./view-all-billings.usecase");
const viewBilling = require("./view-billing.usecase");

const viewAllProductsUseCase = viewAllProducts({ billingDB });
const addBillingUseCase = addBilling({ billingDB, billingEntity });
const viewAllBillingsUseCase = viewAllBillings({ billingDB });
const viewBillingUseCase = viewBilling({ billingDB });

module.exports = {
  viewAllProductsUseCase,
  addBillingUseCase,
  viewAllBillingsUseCase,
  viewBillingUseCase
};
