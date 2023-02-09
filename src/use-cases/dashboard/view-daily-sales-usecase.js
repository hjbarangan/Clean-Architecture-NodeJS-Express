const viewDailySales = ({ dashboardDB }) => {
  return async function dailySalesCount() {
    const result = await dashboardDB.getDailySales();
    
    return {
      daily_sales: result.daily_total ? result.daily_total : 0,
      daily_total: result.data.rows
    };
  };
};

module.exports = viewDailySales;
