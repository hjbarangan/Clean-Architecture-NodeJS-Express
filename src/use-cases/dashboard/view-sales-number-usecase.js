const viewSalesNumber = ({ dashboardDB }) => {
  return async function salesCount() {
    const result = await dashboardDB.getMonthlyNumberOfSales();
    return {
      daily_sales: result.monthly_total,
      daily_total: result.data.rows
    };
  };
};

module.exports = viewSalesNumber;
