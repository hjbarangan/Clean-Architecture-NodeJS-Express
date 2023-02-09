const dashboardDB = require("../../data-access/dashboard");

const viewTopSellers = require("./view-top-selling.usecase");
const viewWeeklySales = require("./view-weekly-sales.usecase");
const viewMonthlyRevenue = require("./view-monthly-revenue-usecase");
const viewDailySales = require("./view-daily-sales-usecase");

const viewTopSellersUseCase = viewTopSellers({ dashboardDB });
const viewWeeklySalesUseCase = viewWeeklySales({ dashboardDB });
const viewMonthlyRevenueUseCase = viewMonthlyRevenue({ dashboardDB });
const viewDailySalesUseCase = viewDailySales({ dashboardDB });

module.exports = {
  viewTopSellersUseCase,
  viewWeeklySalesUseCase,
  viewMonthlyRevenueUseCase,
  viewDailySalesUseCase
};
