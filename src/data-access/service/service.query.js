const serviceData = ({ dbs }) => {
  return Object.freeze({
    getAllServices,
    getServiceById,
    addService,
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

  //TODO: ADD USER ID AND .
  async function addService({ customer_id, serial_number, user_id, services }) {
    const connect = await dbs();

    const params = [customer_id, serial_number, user_id];
    const sql = `INSERT INTO service ( customer_id, serial_number, user_id, status, date_transaction) VALUES ( $1, $2, $3,'Processed', localtimestamp) RETURNING *;`;
    const getService = await connect.query(sql, params);

    let service_id = getService.rows[0].service_id;

    let insertServiceItemsSQL =
      "INSERT INTO service_line (service_id, service_item_id, qty, amount) VALUES ";
    let values = "";
    services.forEach((service) => {
      values += `(${service_id},${service.service_item_id}, ${service.qty}, ${service.amount}),`;
    });
    insertServiceItemsSQL += values.slice(0, -1);
    insertServiceItemsSQL += " RETURNING *;";

    //This query shows all the service transaction
    const showServicesSQL = `SELECT SI.service_name, SI.cost, SI.unit, SL.qty, SL.amount, S.status FROM service_line SL INNER JOIN service S ON S.service_id = SL.service_id INNER JOIN service_item SI ON SI.service_item_id = SL.service_item_id where SL.service_id = ${service_id};`

    await connect.query(insertServiceItemsSQL, (err) => {
      if (err) {
        console.log(err);        
      }                        
    });

    return await connect.query(showServicesSQL)
  }

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
