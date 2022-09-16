const viewAllCarsForSale = ({ carDB }) => {
    return async function viewCarsForSales() {
      const result = await carDB.getAllCarsForSale();
      return result.rows;
    };
  };
  
  module.exports = viewAllCarsForSale;
  