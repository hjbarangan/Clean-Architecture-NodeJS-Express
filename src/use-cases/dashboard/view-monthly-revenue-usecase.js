const viewMonthlyRevenue = ({ dashboardDB }) => {
  return async function revenueCount() {
    const result = await dashboardDB.getMonthlyRevenue();
    return {
      monthly_sales: result.monthly_total,
      monthly_total: result.data.rows
    };
  };
};

module.exports = viewMonthlyRevenue;
