const makeSkuEntity = ({}) => {
  return function createSku(sku) {
    const { unit, cost } = sku;

    if (!unit) {
      throw new Error("Unit is required.");
    }
    if (!cost) {
      throw new Error("Cost is required.");
    }

    return Object.freeze({
      unit,
      cost
    });
  };
};

module.exports = makeSkuEntity;
