const editServiceItem = ({ serviceDB, serviceItemEntity }) => {
  return async function putServiceItem({ id, ...serviceInfo }) {
    const result = serviceItemEntity(serviceInfo);

    return serviceDB.editServiceItem({
      id: id,
      service_name: result.service_name,
      unit: result.unit,
      cost: result.cost
    });
  };
};
module.exports = editServiceItem;
