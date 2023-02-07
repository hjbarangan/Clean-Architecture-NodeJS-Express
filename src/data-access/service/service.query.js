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
    const sql = `SELECT
    S.service_id, SI.service_name, SI.unit, SI.cost, S.serial_number, SL.qty, SL.amount, C.customer_id,
     C.name, C.contact_number, C.address, S.comment, U.name as user_name, S.date_transaction, S.status
     FROM service S
     INNER JOIN service_line SL ON SL.service_id = S.service_id
     INNER JOIN service_item SI ON SL.service_item_id = SI.service_item_id
     INNER JOIN users U ON U.user_id = S.user_id
     INNER JOIN customer C ON C.customer_id = S.customer_id;`;
    return connect.query(sql);
  }

  async function getServiceById(id) {
    const connect = await dbs();
    const sql = `SELECT
    S.service_id, SI.service_name, SI.unit, SI.cost, S.serial_number, SL.qty, SL.amount, C.customer_id,
     C.name, C.contact_number, C.address,  S.comment, S.date_transaction, S.status
     FROM service S
     INNER JOIN service_line SL ON SL.service_id = S.service_id
     INNER JOIN service_item SI ON SL.service_item_id = SI.service_item_id
     INNER JOIN customer C ON C.customer_id = S.customer_id where S.service_id = $1;`;
    const params = [id];
    return connect.query(sql, params);
  }

  async function addService({
    customer_id,
    serial_number,
    user_id,
    comment,
    services
  }) {
    const connect = await dbs();

    const params = [customer_id, serial_number, user_id, comment];
    const sql = `INSERT INTO service ( customer_id, serial_number, user_id, comment, status, date_transaction) VALUES ( $1, $2, $3, $4,'Processed', localtimestamp) RETURNING *;`;
    const getService = await connect.query(sql, params);

    let service_id = getService.rows[0].service_id;
    let service_date_transaction = getService.rows[0].date_transaction;

    let insertServiceItemsSQL =
      "INSERT INTO service_line (service_id, service_item_id, qty, amount) VALUES ";
    let values = "";
    services.forEach((service) => {
      values += `(${service_id},${service.service_item_id}, ${service.qty}, ${service.amount}),`;
    });
    insertServiceItemsSQL += values.slice(0, -1);
    insertServiceItemsSQL += " RETURNING *;";

    //This query shows all the service transaction
    // const showServicesSQL = `SELECT S.service_id, SL.service_line_id, SI.service_name, SI.cost, SI.unit, SL.qty, SL.amount, S.status FROM service_line SL INNER JOIN service S ON S.service_id = SL.service_id INNER JOIN service_item SI ON SI.service_item_id = SL.service_item_id where SL.service_id = $1;`;

    const sll = await connect.query(insertServiceItemsSQL);

    return {
      msg: "Service Ticket Successfully Added.",
      date_transaction: service_date_transaction,
      service_id: service_id,
      data: sll.rows
    };

    // const serviceParams = [service_id]

    //  const sqll = await connect.query(showServicesSQL, serviceParams);

    //  const herzlia = [{
    //   service_id: service_id,
    //   showServicesSQL: sqll.rows ?  sqll.rows : 'aa'
    //  }]
    // return herzlia
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
