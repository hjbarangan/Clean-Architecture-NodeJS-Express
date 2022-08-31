const customerData = ({ dbs }) => {
  return Object.freeze({
    getAllCustomers,
    getCustomerById,
    addCustomer,
    editCustomer,
  });

  async function getAllCustomers() {
    const connect = await dbs();
    const sql = "SELECT * FROM customers";
    return connect.query(sql);
  }

  async function getCustomerById(id) {
    const connect = await dbs();
    const sql = "SELECT * FROM customers WHERE customer_id = $1";
    const params = [id];
    return connect.query(sql, params);
  }

  async function addCustomer(customer) {
    const connect = await dbs();
    const { firstname, lastname, address, contact } = customer;
    const params = [firstname, lastname, address, contact];
    const sql =
      "INSERT INTO customers (firstname, lastname, address, contact, created_date) VALUES ( $1, $2, $3, $4, localtimestamp) RETURNING *;";
    return connect.query(sql, params);
  }

  async function editCustomer(customer) {
    const connect = await dbs();
    const { firstname, lastname, address, contact, id } = customer;
    const sql =
      "UPDATE customers SET firstname = $1, lastname = $2, address = $3, contact = $4 WHERE customer_id = $5 RETURNING *";
    const params = [firstname, lastname, address, contact, id];
    return connect.query(sql, params);
  }

};

module.exports = customerData;
