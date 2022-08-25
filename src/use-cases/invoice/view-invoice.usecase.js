const viewInvoice = ({ invoiceDB }) => {
    return async function viewInvoice(info) {
      const { id } = info;
  
      const result = await invoiceDB.getInvoiceById(id);
      return result.rows;
    };
  };
  
  module.exports = viewInvoice;
  