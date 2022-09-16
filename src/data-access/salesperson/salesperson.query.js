const salespersonData = ({ dbs }) => {
  return Object.freeze({
    getAllSalespersons,
    getSalespersonById,
    addSalesperson,
    editSalesperson,
    softDeleteSalesperson,
  });

  async function getAllSalespersons() {
    const connect = await dbs();
    const sql =
      "SELECT * FROM salespersons WHERE NOT is_active IN (false) ORDER BY salesperson_id DESC";
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
    const { firstname, lastname, contact } = salesperson;
    const params = [firstname, lastname, contact];
    console.log(params);
    const sql =
      "INSERT INTO salespersons (firstname, lastname, contact, is_active, created_at, updated_at) VALUES ( $1, $2, $3, true, localtimestamp, localtimestamp) RETURNING *;";
    return connect.query(sql, params);
  }

  async function editSalesperson(salesperson) {
    const connect = await dbs();
    const { firstname, lastname, contact, id } = salesperson;
    const sql =
      "UPDATE salespersons SET firstname = $1, lastname = $2, contact = $3, updated_at = localtimestamp WHERE salesperson_id = $4 RETURNING *";
    const params = [firstname, lastname, contact, id];
    return connect.query(sql, params);
  }

  async function softDeleteSalesperson(id) {
    const connect = await dbs();
    const sql =
      "UPDATE salespersons SET is_active = false WHERE salesperson_id = $1 RETURNING *";
    const params = [id];
    return connect.query(sql, params);
  }
};

module.exports = salespersonData;
