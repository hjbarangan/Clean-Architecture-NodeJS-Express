const viewAllProducts = ({ quotationDB }) => {
  return async function viewProducts() {
    const result = await quotationDB.getAllProducts();
    return result.rows;
  };
};

module.exports = viewAllProducts;
