const {
  addServiceUseCase,
  editServiceUseCase,
  viewServiceUseCase,
  viewAllServiceUseCase,
  softDeleteServiceUseCase,
  addServiceItemUseCase,
  viewAllServiceItemsUseCase,
  editServiceItemUseCase
} = require("../../use-cases/service/index");

const addServiceController = require("./add-service.controller");
const editServiceController = require("./edit-service.controller");
const fetchAllServicesController = require("./get-all-services.controller");
const fetchServiceDetailsController = require("./get-service-details.controller");
const deleteServiceController = require("./soft-delete-service.controller");

//Service Item
const addServiceItemController = require("./add-service-item.controller");
const fetchAllServiceItemsController = require("./get-all-service-items.controller");
const editServiceItemController = require("./edit-service-item.controller");

//Service
const postServiceController = addServiceController({
  addServiceUseCase
});
const putServiceController = editServiceController({
  editServiceUseCase
});
const getAllServiceController = fetchAllServicesController({
  viewAllServiceUseCase
});
const getServiceByIdController = fetchServiceDetailsController({
  viewServiceUseCase
});

const softDeleteServiceController = deleteServiceController({
  softDeleteServiceUseCase
});

//Service Item
const postServiceItemController = addServiceItemController({
  addServiceItemUseCase
});
const getAllServiceItemsController = fetchAllServiceItemsController({
  viewAllServiceItemsUseCase
});

const putServiceItemController = editServiceItemController({
  editServiceItemUseCase
});

module.exports = Object.freeze({
  postServiceController,
  putServiceController,
  getAllServiceController,
  getServiceByIdController,
  softDeleteServiceController,
  postServiceItemController,
  getAllServiceItemsController,
  putServiceItemController
});
