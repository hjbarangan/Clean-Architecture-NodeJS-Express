const addCustomer = ({ customerDB, customerEntity }) => {
  return async function postCustomer(info) {
    const result = customerEntity(info);

    return customerDB.addCustomer({
      name: result.name,
      address: result.address,
      contact_number: result.contact_number,
      date_created: result.date_created,
      is_active: result.is_active
    });
  };
};
module.exports = addCustomer;
