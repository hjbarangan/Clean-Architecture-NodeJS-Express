const viewAllBillings = ({ billingDB }) => {
  return async function viewBillings() {
    const result = await billingDB.getAllBillings();
    return result.rows;
  };
};

module.exports = viewAllBillings;
