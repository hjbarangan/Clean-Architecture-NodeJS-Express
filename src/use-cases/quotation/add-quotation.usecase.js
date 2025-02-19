const addQuotation = ({ quotationDB, quotationEntity }) => {
  return async function postQuotation(info) {
    const result = quotationEntity(info);

    return quotationDB.addQuotation({
      customer_id: result.customer_id,
      user_id: result.user_id,
      service_id: result.service_id,
      products: result.products
    });

  };
};
module.exports = addQuotation;
