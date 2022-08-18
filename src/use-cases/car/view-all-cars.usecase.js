const viewAllCars = ({ carDB }) => {
    return async function viewCars() {
      const result = await carDB.getAllCars();
      return result.rows;
    };
  };
  
  module.exports = viewAllCars;
  