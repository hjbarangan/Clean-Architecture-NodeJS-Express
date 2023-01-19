const makeServiceEntity = require("./service.entity");
const makeServiceItemEntity = require("./service-item.entity");


const serviceEntity = makeServiceEntity({});
const serviceItemEntity = makeServiceItemEntity({});
module.exports = { serviceEntity, serviceItemEntity };
