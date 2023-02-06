const {
  viewTopSellersUseCase,
  viewMonthlyRevenueUseCase,
  viewWeeklySalesUseCase,
  viewSalesNumberUseCase
} = require("../../use-cases/dashboard/index");

const fetchWeeklySalesController = require("./get-customers-count.controller");
const fetchSalesNumberController = require("./get-sales-number.controller");
const fetchMonthlyRevenueController = require("./get-monthly-revenue.controller");
const fetchTopSellersController = require("./get-top-sellers.controller");

const getWeeklySalesController = fetchWeeklySalesController({
  viewWeeklySalesUseCase
});
const getSalesNumberController = fetchSalesNumberController({
  viewSalesNumberUseCase
});
const getMonthlyRevenueController = fetchMonthlyRevenueController({
  viewMonthlyRevenueUseCase
});
const getTopSellersController = fetchTopSellersController({
  viewTopSellersUseCase
});

module.exports = {
  getWeeklySalesController,
  getSalesNumberController,
  getMonthlyRevenueController,
  getTopSellersController
};
