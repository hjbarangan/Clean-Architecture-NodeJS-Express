const viewAllCustomers = ({ customerDB }) => {
    return async function viewCustomers() {
      const result = await customerDB.getAllCustomers();
      return result.rows;
    };
  };
  
  module.exports = viewAllCustomers;
  