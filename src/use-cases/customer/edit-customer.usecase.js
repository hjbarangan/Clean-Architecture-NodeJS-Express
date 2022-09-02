const editCustomer = ({ customerDB, customerEntity }) => {
  return async function putCustomer({ id, ...customerInfo }) {
    const result = customerEntity(customerInfo);

    return customerDB.editCustomer({
      id: id,
      firstname: result.firstname,
      lastname: result.lastname,
      address: result.address,
      contact: result.contact,
      updated_at: result.updated_at
    });
  };
};
module.exports = editCustomer;
