const customerEntity = (customer) => {
  const { name, contact_number, address } = customer;

  if (!name) {
    throw new Error("Customer's name is required.");
  }

  if (!contact_number) {
    throw new Error("Customer's contact number is required.");
  }

  if (!address) {
    throw new Error("Customer's address is required.");
  }

  return Object.freeze({
    name,
    contact_number,
    address
  });
};

module.exports = customerEntity;
