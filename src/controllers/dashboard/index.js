//usecase
const {
  viewTopSellersUseCase,
  viewMonthlyRevenueUseCase,
  viewCustomerCountUseCase,
  viewSalesNumberUseCase,
} = require("../../use-cases/dashboard/index");

const fetchCustomersCountController = require("./get-customers-count.controller");
const fetchSalesNumberController = require("./get-sales-number.controller");
const fetchMonthlyRevenueController = require("./get-monthly-revenue.controller");
const fetchTopSellersController = require("./get-top-sellers.controller");

const getCustomersCountController = fetchCustomersCountController({
  viewCustomerCountUseCase,
});
const getSalesNumberController = fetchSalesNumberController({
  viewSalesNumberUseCase,
});
const getMonthlyRevenueController = fetchMonthlyRevenueController({
  viewMonthlyRevenueUseCase,
});
const getTopSellersController = fetchTopSellersController({
  viewTopSellersUseCase,
});

module.exports = {
  getCustomersCountController,
  getSalesNumberController,
  getMonthlyRevenueController,
  getTopSellersController,
};
