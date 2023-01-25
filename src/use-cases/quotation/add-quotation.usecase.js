const addQuotation = ({ quotationDB, quotationEntity }) => {
  return async function postQuotation(info) {
    // const result = quotationEntity(info);

    return quotationDB.addQuotation({
      // sku_id: result.sku_id
    });
  };
};
module.exports = addQuotation;
