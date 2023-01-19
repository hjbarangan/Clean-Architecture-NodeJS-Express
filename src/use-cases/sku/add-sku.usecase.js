const addSku = ({ skuDB, skuEntity }) => {
  return async function postSku(info) {
    const result = skuEntity(info);

    return skuDB.addSku({
      unit: result.unit,
      cost: result.cost
    });
  };
};
module.exports = addSku;
