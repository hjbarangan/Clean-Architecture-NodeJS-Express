const addQuotation = ({ quotationDB, quotationEntity }) => {
  return async function postQuotation(info) {
    const result = quotationEntity(info);
    console.log(result);

    return quotationDB.addQuotation({
      customer_id: result.customer_id,
      user_id: result.user_id,
      sku_id: result.sku_id,
      quotation_id: result.quotation_id,
      qty: result.qty,
      cost: result.cost,
      amount: result.amount
    });
  };
};
module.exports = addQuotation;
