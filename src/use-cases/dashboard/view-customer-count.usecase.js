const viewCustomerCount = ({ dashboardDB }) => {
  return async function customerCount() {
    const result = await dashboardDB.getMonthlyCustomers();
    return {
      weekly_sales: result.monthly_total,
      weekly_total: result.data.rows
    };
  };
};

module.exports = viewCustomerCount;
