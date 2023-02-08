const invoiceEntity = (invoice) => {
  const { car_id, customer_id, salesperson_id } = invoice;

  if (!car_id) {
    throw new Error("Car is required");
  }

  if (!customer_id) {
    throw new Error("Customer is required");
  }

  if (!salesperson_id) {
    throw new Error("Salesperson is required");
  }

  return Object.freeze({
    car_id,
    customer_id,
    salesperson_id
  });
};

module.exports = invoiceEntity;
