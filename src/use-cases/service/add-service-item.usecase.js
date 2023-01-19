const addServiceItem = ({ serviceDB, serviceItemEntity }) => {
  return async function postServiceItem(info) {
    const result = serviceItemEntity(info);

    const serviceExists = await serviceDB.findByServiceItemName(result.service_name); 
  
    if (serviceExists.rowCount !== 0) {
       throw new Error("Service Item already exists");
    }
    
    return serviceDB.addServiceItem({
      service_name: result.service_name,
      unit: result.unit,
      cost: result.cost
    });
  };
};
module.exports = addServiceItem;
