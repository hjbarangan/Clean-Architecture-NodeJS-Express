const viewAllInvoices = ({ invoiceDB }) => {
  return async function viewInvoices() {
    const result = await invoiceDB.getAllInvoices();
    return result.rows;
  };
};

module.exports = viewAllInvoices;
