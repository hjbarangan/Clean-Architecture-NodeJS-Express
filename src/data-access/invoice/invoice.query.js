const invoiceData = ({ dbs, carDB }) => {
  return Object.freeze({
    getAllInvoices,
    createInvoice,
    getInvoiceById,
    findByInvoiceNumber,
  });

  async function getAllInvoices() {
    const connect = await dbs();
    const sql = "SELECT * FROM sales_invoice ORDER BY invoice_id DESC";
    return connect.query(sql);
  }

  async function getInvoiceById(id) {
    const connect = await dbs();
    const sql = "SELECT * FROM sales_invoice WHERE invoice_id = $1";
    const params = [id];
    return connect.query(sql, params);
  }

  async function createInvoice(data) {
    const connect = await dbs();

    //* INSERT INTO INVOICE
    const { invoice_number, car_id, customer_id, salesperson_id, invoice_id } = data;
    const params = [invoice_number, car_id, customer_id, salesperson_id];
    const sql =
      "INSERT INTO sales_invoice (invoice_number, car_id, customer_id, salesperson_id, transaction_date) VALUES ( $1, $2, $3, $4, NOW()) RETURNING *;";

    await connect.query(sql, params);

    //TODO: UPDATE CAR_FOR_SALE OF THE CAR SOLD INTO NO

    const updateParams = [car_id];
    const updateSQL = "UPDATE cars SET car_for_sale = 'No' WHERE car_id = $1";

    await connect.query(updateSQL, updateParams);

    const invoiceTransactionSQL =
      "SELECT s.invoice_number, s.transaction_date, c.price, c.serial_number, c.brand, c.model FROM sales_invoice s JOIN cars c ON c.car_id = s.car_id WHERE s.invoice_id = $1";
    const invoiceTransactionParams = [invoice_id];

    const viewTransaction =  await connect.query(invoiceTransactionSQL, invoiceTransactionParams);
    return viewTransaction.rows;
  }

  async function findByInvoiceNumber(invoice_number) {
    const connect = await dbs();
    const sql = "SELECT * FROM sales_invoice WHERE invoice_number = $1";
    const params = [invoice_number];
    return connect.query(sql, params);
  }
};

module.exports = invoiceData;
