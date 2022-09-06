const createInvoice = ({ invoiceDB, invoiceEntity }) => {
    return async function postInvoice(info) {
      const result = invoiceEntity(info);
      const invoiceExists = await invoiceDB.findByInvoiceNumber(result.invoice_number);
  
      if (invoiceExists.rowCount !== 0) {
        const result = {
          msg: "Invoice Number already exists",
          car: invoiceExists.rows,
        };
        return result;
      }
  
      return invoiceDB.createInvoice({
        invoice_id: result.invoice_id,
        invoice_number: result.invoice_number,
        car_id: result.car_id,
        customer_id: result.customer_id,
        salesperson_id: result.salesperson_id
      });
    };
  };
  module.exports = createInvoice;
  
  
  