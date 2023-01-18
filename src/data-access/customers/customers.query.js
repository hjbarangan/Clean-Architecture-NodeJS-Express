const customerData = ({ dbs }) => {
  return Object.freeze({
    getAllCustomers,
    getCustomerById,
    addCustomer,
    editCustomer,
    softDeleteCustomer,
  });

  async function getAllCustomers() {
    const connect = await dbs();
    const sql =
      "SELECT * FROM customer WHERE NOT is_active IN (false) ORDER BY customer_id DESC";
    return connect.query(sql);
  }

  async function getCustomerById(id) {
    const connect = await dbs();
    const sql = "SELECT * FROM customer WHERE customer_id = $1";
    const params = [id];
    return connect.query(sql, params);
  }

  async function addCustomer(customer) {
    const connect = await dbs();
    const { name, contact_number, address } = customer;
    const params = [name, contact_number, address];
    const sql =
      "INSERT INTO customer (name, contact_number, address, date_created, is_active) VALUES ( $1, $2, $3, localtimestamp, true) RETURNING *;";
    return connect.query(sql, params);
  }

  async function editCustomer(customer) {
    const connect = await dbs();
    const { name, contact_number, address, id } = customer;
    const sql =
      "UPDATE customer SET name = $1, contact_number = $2, address = $3 WHERE customer_id = $4 RETURNING *";
    const params = [name, contact_number, address, id];
    return connect.query(sql, params);
  }

  async function softDeleteCustomer(id) {
    const connect = await dbs();
    const sql =
      "UPDATE customer SET is_active = false WHERE customer_id = $1 RETURNING *";
    const params = [id];
    return connect.query(sql, params);
  }
};

module.exports = customerData;
