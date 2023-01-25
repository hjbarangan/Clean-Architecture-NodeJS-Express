const viewQuotation = ({ quotationDB }) => {
  return async function viewQuotation(info) {
    const { id } = info;
    const result = await quotationDB.getQuotationById(id);
    return result.rows;
  };
};

module.exports = viewQuotation;
