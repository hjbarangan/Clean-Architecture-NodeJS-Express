const salespersonData = ({ dbs }) => {
  return Object.freeze({
    //insert functions
    getAllSalespersons,
    getSalespersonById,
    addSalesperson,
    editSalesperson,
  });

  //insert here the queries

  async function getAllSalespersons() {
    const connect = await dbs();

    const sql = "SELECT * FROM salespersons";

    return connect.query(sql);
  }

  async function getSalespersonById(id) {
    const connect = await dbs();

    const sql = "SELECT * FROM salespersons WHERE salesperson_id = $1";

    const params = [id];

    return connect.query(sql, params);
  }

  async function addSalesperson(salesperson) {
    const connect = await dbs();

    const { firstname, lastname } = salesperson;

    const params = [firstname, lastname];

    const sql =
      "INSERT INTO salespersons (firstname, lastname) VALUES ( $1, $2) RETURNING *;";

    return connect.query(sql, params);
  }

  async function editSalesperson({ id, ...salespersonInfo }) {
    const connect = await dbs();

    const sql =
      "UPDATE salespersons SET firstname = $1, lastname = $2 WHERE salesperson_id = $3 RETURNING *";

    const params = [
      salespersonInfo.firstname,
      salespersonInfo.lastname,
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

module.exports = salespersonData;
