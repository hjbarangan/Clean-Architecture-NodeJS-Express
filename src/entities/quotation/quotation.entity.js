const makeQuotationEntity = ({}) => {
  return function createQuotation(quotation) {
    const {
      customer_id,
      user_id,
      sku_id,
      qty,
      cost,
      amount
    } = quotation;

    return Object.freeze({
      customer_id,
      user_id,
      sku_id,
      qty,
      cost,
      amount
    });
  };
};

module.exports = makeQuotationEntity;
