const viewMonthlyRevenue = ({ dashboardDB }) => {
  return async function revenueCount() {
    const result = await dashboardDB.getMonthlyRevenue();
    return result.rows;
  };
};

module.exports = viewMonthlyRevenue;
