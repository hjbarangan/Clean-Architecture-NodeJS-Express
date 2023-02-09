const addCustomer = ({ customerDB, customerEntity }) => {
  return async function postCustomer(info) {
    const result = customerEntity(info);

    const data = await customerDB.addCustomer({
      name: result.name,
      address: result.address,
      contact_number: result.contact_number,
      date_created: result.date_created,
      is_active: result.is_active
    });

    return {
      msg: "Added Customer Successfully",
      data: data.rows
    }
  };
};
module.exports = addCustomer;
