const viewCustomerCount = ({ dashboardDB }) => {
  return async function customerCount() {
    const result = await dashboardDB.getMonthlyCustomers();

    return {
      weekly_sales: result.weekly_total ? result.weekly_total : 0,
      weekly_total: result.data.rows
    };
  };
};

module.exports = viewCustomerCount;
