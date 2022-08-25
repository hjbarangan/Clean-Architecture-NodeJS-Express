const {
  addSalespersonUseCase,
  editSalespersonUseCase,
  viewSalespersonUseCase,
  viewAllSalespersonUseCase,
} = require("../../use-cases/salesperson/index");

const addSalespersonController = require("./add-salesperson.controller");
const editSalespersonController = require("./edit-salesperson.controller");
const fetchAllSalespersonsController = require("./get-all-salesperson.controller");
const fetchSalespersonDetailsController = require("./get-salesperson-details.controller");

const postSalespersonController = addSalespersonController({
  addSalespersonUseCase,
});
const putSalespersonController = editSalespersonController({
  editSalespersonUseCase,
});
const getAllSalespersonController = fetchAllSalespersonsController({
  viewAllSalespersonUseCase,
});
const getSalespersonByIdController = fetchSalespersonDetailsController({
  viewSalespersonUseCase,
});

const controller = Object.freeze({
  postSalespersonController,
  putSalespersonController,
  getAllSalespersonController,
  getSalespersonByIdController,
});

module.exports = controller;

module.exports = {
  postSalespersonController,
  putSalespersonController,
  getSalespersonByIdController,
  getAllSalespersonController,
};
