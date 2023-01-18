const editCustomer = ({ customerDB, customerEntity }) => {
  return async function putCustomer({ id, ...info }) {
    const result = customerEntity(info);

    return customerDB.editCustomer({
      id: id,
      name: result.name,
      address: result.address,
      contact_number: result.contact_number,
      date_created: result.date_created
    });
  };
};
module.exports = editCustomer;
