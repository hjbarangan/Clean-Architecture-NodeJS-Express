const customerDB = require("../../data-access/customers/index");
const customerEntity = require("../../entities/customers/index");

const addCustomer = require("./add-customer.usecase");
const editCustomer = require("./edit-customer.usecase");
const viewAllCustomers = require("./view-all-customers.usecase");
const viewCustomer = require("./view-customer.usecase");

const addCustomerUseCase = addCustomer({ customerDB, customerEntity });
const editCustomerUseCase = editCustomer({ customerDB, customerEntity });
const viewAllCustomersUseCase = viewAllCustomers({ customerDB });
const viewCustomerUseCase = viewCustomer({ customerDB });

const customerServices = Object.freeze({
  addCustomerUseCase,
  editCustomerUseCase,
  viewAllCustomersUseCase,
  viewCustomerUseCase,
});

module.exports = customerServices;

module.exports = {
  addCustomerUseCase,
  editCustomerUseCase,
  viewAllCustomersUseCase,
  viewCustomerUseCase,
};
