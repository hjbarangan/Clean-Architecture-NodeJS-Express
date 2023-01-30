const addBilling = ({ billingDB, billingEntity }) => {
  return async function postBilling(info) {
    const result = billingEntity(info);

    const data = await billingDB.addBilling({
      customer_id: result.customer_id,
      user_id: result.user_id,
      service_id: result.service_id,
      products: result.products
    });
    //console.log("result-usecase", data);

    return ({
      msg: "Billing is successfully created!",
      billing_id: data.rows[0].billing_id,
      serial_number: data.rows[0].serial_number,
      service: data.rows[0].service_name,
      data: data.rows
    });
  };
};
module.exports = addBilling;
