const invoiceData = ({ dbs }) => {
  return Object.freeze({
    getAllInvoices,
    createInvoice,
    getInvoiceById,
    findByInvoiceNumber
  });

  async function getAllInvoices() {
    try {
      const connect = await dbs();
      const sql = `SELECT S.invoice_id, S.invoice_number, S.transaction_date, CONCAT(C.firstname, ' ', C.lastname) AS customer_name, CONCAT(SP.firstname, ' ', SP.lastname) AS salesperson_name, A.price, A.serial_number, A.brand, A.model, A.color FROM sales_invoice S
      INNER JOIN customers C ON S.customer_id = C.customer_id INNER JOIN cars A ON S.car_id = A.car_id INNER JOIN salespersons SP ON S.salesperson_id = SP.salesperson_id;`;
      return connect.query(sql);
    } catch (error) {
      console.log(error);
    }
  }

  async function getInvoiceById(id) {
    try {
      const connect = await dbs();
      const sql = "SELECT * FROM sales_invoice WHERE invoice_id = $1";
      const params = [id];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function createInvoice(data) {
    try {
      const connect = await dbs();

      const { car_id, customer_id, salesperson_id } = data;

      const getLastNoSQL = "SELECT MAX(invoice_id) FROM sales_invoice";
      const lastNo = await connect.query(getLastNoSQL);
      const lastIDIncrement = lastNo.rows[0].max + 1;
      const addLeadingZeros = String(lastIDIncrement).padStart(5, "0");
      const generatedInvoiceNo = `INV-${addLeadingZeros}`;

      //* INSERT INTO INVOICE

      const params = [generatedInvoiceNo, car_id, customer_id, salesperson_id];
      const sql =
        "INSERT INTO sales_invoice (invoice_number, car_id, customer_id, salesperson_id, transaction_date) VALUES ( $1, $2, $3, $4, NOW()) RETURNING *;";
      await connect.query(sql, params);

      const updateParams = [car_id];
      const updateSQL = "UPDATE cars SET car_for_sale = 'No' WHERE car_id = $1";
      await connect.query(updateSQL, updateParams);

      const invoiceTransactionSQL =
        "SELECT s.invoice_id, s.invoice_number, s.transaction_date, c.price, c.serial_number, c.brand, c.model FROM sales_invoice s JOIN cars c ON c.car_id = s.car_id WHERE s.invoice_number = $1";
      const invoiceTransactionParams = [generatedInvoiceNo];

      const viewTransaction = await connect.query(
        invoiceTransactionSQL,
        invoiceTransactionParams
      );
      return viewTransaction.rows;
    } catch (error) {
      console.log(error);
    }
  }

  async function findByInvoiceNumber(invoice_number) {
    try {
      const connect = await dbs();
      const sql = "SELECT * FROM sales_invoice WHERE invoice_number = $1";
      const params = [invoice_number];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = invoiceData;
