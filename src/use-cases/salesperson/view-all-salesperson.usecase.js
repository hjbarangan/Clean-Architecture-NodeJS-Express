const viewAllSalesperson = ({ salespersonDB }) => {
    return async function viewSalespersons() {
      const result = await salespersonDB.getAllSalespersons();
      return result.rows;
    };
  };
  
  module.exports = viewAllSalesperson;
  