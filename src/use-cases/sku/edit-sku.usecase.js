const editSku = ({ skuDB, skuEntity }) => {
  return async function putSku({ id, ...skuInfo }) {
    const result = skuEntity(skuInfo);

    return skuDB.editSku({
      id: id,
      unit: result.unit,
      cost: result.cost
    });
  };
};
module.exports = editSku;
