const addCustomer = ({ customerDB, customerEntity }) => {
  return async function postCustomer(info) {
    const result = customerEntity(info);

    return customerDB.addCustomer({
      firstname: result.firstname,
      lastname: result.lastname,
      address: result.address,
      contact: result.contact,
      created_date: result.created_at,
      updated_at: result.updated_at
    });
  };
};
module.exports = addCustomer;
