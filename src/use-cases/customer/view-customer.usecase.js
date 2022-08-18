const viewCustomer = ({ customerDB }) => {
    return async function viewCustomer(info) {
      const { id } = info;
  
      const result = await customerDB.getCustomerById(id);
      return result.rows;
    };
  };
  
  module.exports = viewCustomer;
  