const invoiceData = ({ dbs }) => {
  return Object.freeze({
    getAllInvoices,
    createInvoice,
    getInvoiceById,
    findByInvoiceNumber,
  });

  async function getAllInvoices() {
    const connect = await dbs();
    const sql = "SELECT * FROM sales_invoice";
    return connect.query(sql);
  }

  async function getInvoiceById(id) {
    const connect = await dbs();
    const sql = "SELECT * FROM sales_invoice WHERE sales_invoice_id = $1";
    const params = [id];
    return connect.query(sql, params);
  }

  async function createInvoice(invoice) {
    const connect = await dbs();
    const { invoice_number, car_id, customer_id, salesperson_id } = invoice;
    const params = [invoice_number, car_id, customer_id, salesperson_id];
    const sql =
      "INSERT INTO sales_invoice (invoice_number, car_id, customer_id, salesperson_id, transaction_date) VALUES ( $1, $2, $3, $4, NOW()) RETURNING *;";
    return connect.query(sql, params);
  }

  async function findByInvoiceNumber(invoice_number) {
    const connect = await dbs();
    const sql = "SELECT * FROM sales_invoice WHERE invoice_number = $1";
    const params = [invoice_number];
    return connect.query(sql, params);
  }
};

module.exports = invoiceData;
