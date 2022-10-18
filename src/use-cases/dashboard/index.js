const dashboardDB = require("../../data-access/dashboard");

const viewTopSellers = require("./view-top-selling.usecase");
const viewCustomerCount = require("./view-customer-count.usecase");
const viewMonthlyRevenue = require("./view-monthly-revenue-usecase");
const viewSalesNumber = require("./view-sales-number-usecase");

const viewTopSellersUseCase = viewTopSellers({ dashboardDB });
const viewCustomerCountUseCase = viewCustomerCount({ dashboardDB });
const viewMonthlyRevenueUseCase = viewMonthlyRevenue({ dashboardDB });
const viewSalesNumberUseCase = viewSalesNumber({ dashboardDB });

const dashboardServices = Object.freeze({
  viewTopSellersUseCase,
  viewCustomerCountUseCase,
  viewMonthlyRevenueUseCase,
  viewSalesNumberUseCase
});

module.exports = dashboardServices;

module.exports = {
  viewTopSellersUseCase,
  viewCustomerCountUseCase,
  viewMonthlyRevenueUseCase,
  viewSalesNumberUseCase
};
