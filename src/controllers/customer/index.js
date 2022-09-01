const {  addCustomerUseCase, editCustomerUseCase, viewAllCustomersUseCase, viewCustomerUseCase, softDeleteCustomerUseCase } = require("../../use-cases/customer/index");

//insert controller functions

const addCustomerController = require("./add-customer.controller");
const editCustomerController = require("./edit-customer.controller");
const fetchAllCustomersController = require("./get-all-customers.controller");
const fetchCustomerDetailsController = require("./get-customer-details.controller");
const deleteCustomerController = require("./soft-delete-customer.controller");

//insert controller functions with usecase function

const postCustomerController = addCustomerController({ addCustomerUseCase });
const putCustomerController = editCustomerController({ editCustomerUseCase})
const getAllCustomersController = fetchAllCustomersController({ viewAllCustomersUseCase });
const getCustomerByIdController = fetchCustomerDetailsController ({ viewCustomerUseCase });
const softDeleteCustomerController = deleteCustomerController({softDeleteCustomerUseCase})

const controller = Object.freeze({
  //insert here the declared const above
  postCustomerController,
  putCustomerController,
  getAllCustomersController,
  getCustomerByIdController,
  softDeleteCustomerController
});

module.exports = controller;

module.exports = {
  // insert the destructured controller function
  postCustomerController,
  putCustomerController,
  getAllCustomersController,
  getCustomerByIdController,
  softDeleteCustomerController
};

