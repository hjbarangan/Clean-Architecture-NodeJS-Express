const viewSalesNumber = ({ dashboardDB }) => {
    return async function salesCount() {
      const result = await dashboardDB.getMonthlyNumberOfSales();
      return result.rows;
    };
  };
  
  module.exports = viewSalesNumber;
  