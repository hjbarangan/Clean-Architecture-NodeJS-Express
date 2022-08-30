const addCustomer = ({ customerDB, customerEntity }) => {
  return async function postCustomer(info) {
    const result = customerEntity(info);

    return customerDB.addCustomer({
      firstname: result.firstname,
      lastname: result.lastname,
      address: result.address,
      contact: result.contact,
    });
  };
};
module.exports = addCustomer;
