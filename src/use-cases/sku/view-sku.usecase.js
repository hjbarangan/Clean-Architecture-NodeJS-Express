const viewSku = ({ skuDB }) => {
  return async function viewSku(info) {
    const { id } = info;
    const result = await skuDB.getSkuById(id);
    return result.rows;
  };
};

module.exports = viewSku;
