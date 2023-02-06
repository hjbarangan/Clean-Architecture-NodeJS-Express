const viewWeeklySales = ({ dashboardDB }) => {
  return async function weeklySales() {
    const result = await dashboardDB.getWeeklySales();

    return {
      weekly_sales: result.weekly_total ? result.weekly_total : 0,
      weekly_total: result.data.rows
    };
  };
};

module.exports = viewWeeklySales;
