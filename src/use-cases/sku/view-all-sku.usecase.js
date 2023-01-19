const viewAllSku = ({ skuDB }) => {
  return async function viewSkus() {
    const result = await skuDB.getAllSku();
    return result.rows;
  };
};

module.exports = viewAllSku;
