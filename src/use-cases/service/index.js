const serviceDB = require("../../data-access/service/index");
const {
  serviceItemEntity,
  serviceEntity
} = require("../../entities/services/index");

const addService = require("./add-service.usecase");
const editService = require("./edit-service.usecase");
const viewService = require("./view-service.usecase");
const viewAllService = require("./view-all-service.usecase");
const softDelService = require("./delete-service.usecase");

//Service Item
const addServiceItem = require("./add-service-item.usecase");
const viewAllServiceItems = require("./view-all-service-items.usecase");
const editServiceItem = require("./edit-service-item.usecase");

const addServiceUseCase = addService({
  serviceDB,
  serviceEntity
});
const editServiceUseCase = editService({
  serviceDB,
  serviceEntity
});
const viewServiceUseCase = viewService({ serviceDB });
const viewAllServiceUseCase = viewAllService({ serviceDB });
const softDeleteServiceUseCase = softDelService({ serviceDB });

//Service Item
const addServiceItemUseCase = addServiceItem({
  serviceDB,
  serviceItemEntity
});

const viewAllServiceItemsUseCase = viewAllServiceItems({
  serviceDB,
  serviceItemEntity
});
const editServiceItemUseCase = editServiceItem({
  serviceDB,
  serviceItemEntity
});

module.exports = {
  addServiceUseCase,
  editServiceUseCase,
  viewServiceUseCase,
  viewAllServiceUseCase,
  softDeleteServiceUseCase,
  addServiceItemUseCase,
  viewAllServiceItemsUseCase,
  editServiceItemUseCase
};
