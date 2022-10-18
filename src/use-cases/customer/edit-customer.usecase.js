const editCustomer = ({ customerDB, customerEntity }) => {
  return async function putCustomer({ id, ...info }) {
    const result = customerEntity(info);

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
