const addQuotation = ({ quotationDB, quotationEntity }) => {
  return async function postQuotation(info) {
    const result = quotationEntity(info);

    return quotationDB.addQuotation({

    });
  };
};
module.exports = addQuotation;
