const {  addCustomerUseCase, editCustomerUseCase, viewAllCustomersUseCase, viewCustomerUseCase } = require("../../use-cases/customer/index");

//insert controller functions

const addCustomerController = require("./add-customer.controller");
const editCustomerController = require("./edit-customer.controller");
const fetchAllCustomersController = require("./get-all-customers.controller");
const fetchCustomerDetailsController = require("./get-customer-details.controller");

//insert controller functions with usecase function

const postCustomerController = addCustomerController({ addCustomerUseCase });
const putCustomerController = editCustomerController({ editCustomerUseCase})
const getAllCustomersController = fetchAllCustomersController({ viewAllCustomersUseCase });
const getCustomerByIdController = fetchCustomerDetailsController ({ viewCustomerUseCase });

const controller = Object.freeze({
  //insert here the declared const above
  postCustomerController,
  putCustomerController,
  getAllCustomersController,
  getCustomerByIdController
});

module.exports = controller;

module.exports = {
  // insert the destructured controller function
  postCustomerController,
  putCustomerController,
  getAllCustomersController,
  getCustomerByIdController
};

