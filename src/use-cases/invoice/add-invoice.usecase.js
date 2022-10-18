const createInvoice = ({ invoiceDB, invoiceEntity }) => {
  return async function postInvoice(info) {
    const result = invoiceEntity(info);

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
