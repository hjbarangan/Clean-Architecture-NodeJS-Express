const softDelSku = ({ skuDB }) => {
  return async function deleteSku(info) {
    const { id } = info;

    const result = await skuDB.softDeleteSku(id);
    return { message: "Sku Deleted Successfully", data: result.rows };
  };
};

module.exports = softDelSku;
