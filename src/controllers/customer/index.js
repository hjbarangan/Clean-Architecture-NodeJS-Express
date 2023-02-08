const {
  addCustomerUseCase,
  editCustomerUseCase,
  viewAllCustomersUseCase,
  viewCustomerUseCase,
  softDeleteCustomerUseCase
} = require("../../use-cases/customer/index");

const addCustomerController = require("./add-customer.controller");
const editCustomerController = require("./edit-customer.controller");
const fetchAllCustomersController = require("./get-all-customers.controller");
const fetchCustomerDetailsController = require("./get-customer-details.controller");
const deleteCustomerController = require("./soft-delete-customer.controller");

const postCustomerController = addCustomerController({ addCustomerUseCase });
const putCustomerController = editCustomerController({ editCustomerUseCase });
const getAllCustomersController = fetchAllCustomersController({
  viewAllCustomersUseCase
});
const getCustomerByIdController = fetchCustomerDetailsController({
  viewCustomerUseCase
});
const softDeleteCustomerController = deleteCustomerController({
  softDeleteCustomerUseCase
});

module.exports = Object.freeze({
  postCustomerController,
  putCustomerController,
  getAllCustomersController,
  getCustomerByIdController,
  softDeleteCustomerController
});
