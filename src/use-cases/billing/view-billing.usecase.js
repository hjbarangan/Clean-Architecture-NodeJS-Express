const viewBilling = ({ billingDB }) => {
  return async function viewBilling(info) {
    const { id } = info;
    const result = await billingDB.getBillingById(id);
    return result.rows;
  };
};

module.exports = viewBilling;
