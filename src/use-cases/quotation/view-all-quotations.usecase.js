const viewAllQuotations = ({ quotationDB }) => {
  return async function viewSkus() {
    const result = await quotationDB.getAllQuotations();
    return result.rows;
  };
};

module.exports = viewAllQuotations;
