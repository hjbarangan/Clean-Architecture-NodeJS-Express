const serviceItemEntity = (service_item) => {
  const { service_name, unit, cost } = service_item;

  if (!service_name) {
    throw new Error("Service name is required.");
  }
  if (!unit) {
    throw new Error("Unit is required.");
  }
  if (!cost) {
    throw new Error("Cost is required.");
  }

  return Object.freeze({
    service_name,
    unit,
    cost
  });
};

module.exports = serviceItemEntity;
