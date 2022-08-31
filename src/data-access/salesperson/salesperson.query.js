const salespersonData = ({ dbs }) => {
  return Object.freeze({
    getAllSalespersons,
    getSalespersonById,
    addSalesperson,
    editSalesperson,
  });

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
    const { firstname, lastname, contact} = salesperson;
    const params = [firstname, lastname, contact];
    const sql =
      "INSERT INTO salespersons (firstname, lastname, contact) VALUES ( $1, $2, $3) RETURNING *;";
    return connect.query(sql, params);
  }

  async function editSalesperson(salesperson) {
    const connect = await dbs();
    const { firstname, lastname, contact, id } = salesperson;
    const sql =
      "UPDATE salespersons SET firstname = $1, lastname = $2, contact = $3 WHERE salesperson_id = $4 RETURNING *";
    const params = [firstname, lastname, contact, id];
    return connect.query(sql, params);
  }
};

module.exports = salespersonData;
