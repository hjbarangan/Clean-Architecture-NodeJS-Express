const addBilling = ({ billingDB, billingEntity }) => {
  return async function postBilling(info) {
    const result = billingEntity(info);

    const data = await billingDB.addBilling({
      customer_id: result.customer_id,
      user_id: result.user_id,
      service_id: result.service_id,
      quotation_id: result.quotation_id,
      products: result.products
    });

    return {
      msg: "Transaction Processed Successfully.",
      data: data.rows
    };
  };
};
module.exports = addBilling;
