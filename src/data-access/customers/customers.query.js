const customerData = ({ dbs }) => {
    return Object.freeze({
      //insert functions
      getAllCustomers,
      getCustomerById,
      addCustomer,
      editCustomer
    });
  
    //insert here the queries
  
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
  
    async function addCustomer({ ...info }) {
      const connect = await dbs();
  
      const params = [
        info.firstname,
        info.lastname,
        info.address,
        info.contact
      ];
  
      const sql =
        "INSERT INTO customers (firstname, lastname, address, contact) VALUES ( $1, $2, $3, $4) RETURNING *;";
  
      return connect.query(sql, params);
    }
  
    async function editCustomer({ id, ...customerInfo }) {
      const connect = await dbs();
  
      const sql =
        "UPDATE customers SET firstname = $1, lastname = $2, address = $3, contact = $4 WHERE customer_id = $5 RETURNING *";
  
      const params = [
        customerInfo.firstname,
        customerInfo.lastname,
        customerInfo.address,
        customerInfo.contact,
        id,
      ];
  
      return connect.query(sql, params);
    }
  
    // async function findBySerial(serial_number) {
    //   const connect = await dbs();
  
    //   const sql = "SELECT * FROM cars WHERE serial_number = $1";
  
    //   const params = [serial_number];
  
    //   return connect.query(sql, params);
    // }

  };
  
  
  module.exports = customerData;
  