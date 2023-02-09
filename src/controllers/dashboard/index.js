const {
  viewTopSellersUseCase,
  viewMonthlyRevenueUseCase,
  viewWeeklySalesUseCase,
  viewDailySalesUseCase
} = require("../../use-cases/dashboard/index");

const fetchWeeklySalesController = require("./get-weekly-sales.controller");
const fetchDailySalesController = require("./get-daily-sales.controller");
const fetchMonthlyRevenueController = require("./get-monthly-revenue.controller");
const fetchTopSellersController = require("./get-top-sellers.controller");

const getWeeklySalesController = fetchWeeklySalesController({
  viewWeeklySalesUseCase
});
const getDailySalesController = fetchDailySalesController({
  viewDailySalesUseCase
});
const getMonthlyRevenueController = fetchMonthlyRevenueController({
  viewMonthlyRevenueUseCase
});
const getTopSellersController = fetchTopSellersController({
  viewTopSellersUseCase
});

module.exports = {
  getWeeklySalesController,
  getDailySalesController,
  getMonthlyRevenueController,
  getTopSellersController
};
