const dashboardDB = require("../../data-access/dashboard");

const viewTopSellers = require("./view-top-selling.usecase");
const viewWeeklySales = require("./view-customer-count.usecase");
const viewMonthlyRevenue = require("./view-monthly-revenue-usecase");
const viewSalesNumber = require("./view-sales-number-usecase");

const viewTopSellersUseCase = viewTopSellers({ dashboardDB });
const viewWeeklySalesUseCase = viewWeeklySales({ dashboardDB });
const viewMonthlyRevenueUseCase = viewMonthlyRevenue({ dashboardDB });
const viewSalesNumberUseCase = viewSalesNumber({ dashboardDB });

const dashboardServices = Object.freeze({
  viewTopSellersUseCase,
  viewWeeklySalesUseCase,
  viewMonthlyRevenueUseCase,
  viewSalesNumberUseCase
});

module.exports = dashboardServices;

module.exports = {
  viewTopSellersUseCase,
  viewWeeklySalesUseCase,
  viewMonthlyRevenueUseCase,
  viewSalesNumberUseCase
};
