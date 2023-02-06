const viewSalesNumber = ({ dashboardDB }) => {
  return async function salesCount() {
    const result = await dashboardDB.getMonthlyNumberOfSales();
    
    return {
      daily_sales: result.daily_total ? result.daily_total : 0,
      daily_total: result.data.rows
    };
  };
};

module.exports = viewSalesNumber;
