const serviceData = ({ dbs }) => {
  return Object.freeze({
    getAllServices,
    getServiceById,
    addService,
    editService,
    addServiceItem,
    editServiceItem,
    softDeleteServiceItem,
    findByServiceItemName,
    getAllServiceItems
  });

  async function getAllServices() {
    const connect = await dbs();
    const sql = "SELECT * FROM service ORDER BY service_id DESC";
    return connect.query(sql);
  }

  async function getServiceById(id) {
    const connect = await dbs();
    const sql = "SELECT * FROM service WHERE service_id = $1";
    const params = [id];
    return connect.query(sql, params);
  }

  //TODO: ADD USER ID AND ADD AN ARRAY IN SERVICE ITEM.
  async function addService({customer_id, serial_number, user_id}) {
    const connect = await dbs();
    // const { customer_id, serial_number, user } = service;

    const params = [customer_id, serial_number, user_id];
    const sql =
    `INSERT INTO service ( customer_id, serial_number, user_id, status, date_transaction) VALUES ( $1, $2, $3,'Test', localtimestamp) RETURNING *;`;
    return connect.query(sql, params);
  }

  async function editService(service) {
    const connect = await dbs();
    const { service_name, hourly_rate, id } = service;
    const sql =
      "UPDATE service SET service_name = $1, hourly_rate = $2, updated_at = localtimestamp WHERE service_id = $3 RETURNING *";
    const params = [service_name, hourly_rate, id];
    return connect.query(sql, params);
  }

  //TODO: service item

  async function findByServiceItemName(service_name) {
    const connect = await dbs();
    const sql = "SELECT * FROM service_item WHERE service_name = $1";
    const params = [service_name];
    return connect.query(sql, params);
  }

  async function getAllServiceItems() {
    const connect = await dbs();
    const sql = "SELECT * FROM service_item ORDER BY service_item_id DESC";
    return connect.query(sql);
  }

  async function addServiceItem(service_item) {
    const connect = await dbs();
    const { service_name, unit, cost } = service_item;
    const params = [service_name, unit, cost];
    const sql =
      "INSERT INTO service_item ( service_name, unit, cost, is_active, date_created) VALUES ( $1, $2, $3, true, localtimestamp) RETURNING *;";
    return connect.query(sql, params);
  }

  async function editServiceItem(service_item) {
    const connect = await dbs();
    const { service_name, unit, cost, id } = service_item;
    const params = [service_name, unit, cost, id];
    const sql =
      "UPDATE service_item SET service_name = $1, unit = $2, cost = $3 WHERE service_item_id = $4 RETURNING *";

    return connect.query(sql, params);
  }

  async function softDeleteServiceItem(id) {
    const connect = await dbs();
    const sql =
      "UPDATE service_item SET is_active = false WHERE service_item_id = $1 RETURNING *";
    const params = [id];
    return connect.query(sql, params);
  }
};

module.exports = serviceData;
