const viewAllTopSellers = ({ dashboardDB }) => {
    return async function viewTopSellers() {
      const result = await dashboardDB.getTopSellingBrands();
      return result.rows;
    };
  };
  
  module.exports = viewAllTopSellers;
  