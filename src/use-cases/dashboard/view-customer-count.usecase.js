const viewCustomerCount = ({ dashboardDB }) => {
  return async function customerCount() {
    const result = await dashboardDB.getMonthlyCustomers();
    return result.rows;
  };
};

module.exports = viewCustomerCount;
