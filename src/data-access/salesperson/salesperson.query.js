const salespersonData = ({ dbs }) => {
  return Object.freeze({
    getAllSalespersons,
    getSalespersonById,
    addSalesperson,
    editSalesperson,
    softDeleteSalesperson
  });

  async function getAllSalespersons() {
    try {
      const connect = await dbs();
      const sql =
        "SELECT * FROM salespersons WHERE NOT is_active IN (false) ORDER BY salesperson_id DESC";
      return connect.query(sql);
    } catch (error) {
      console.log(error);
    }
  }

  async function getSalespersonById(id) {
    try {
      const connect = await dbs();
      const sql = "SELECT * FROM salespersons WHERE salesperson_id = $1";
      const params = [id];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function addSalesperson(salesperson) {
    try {
      const connect = await dbs();
      const { firstname, lastname, contact } = salesperson;
      const params = [firstname, lastname, contact];
      const sql =
        "INSERT INTO salespersons (firstname, lastname, contact, is_active, created_at, updated_at) VALUES ( $1, $2, $3, true, localtimestamp, localtimestamp) RETURNING *;";
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function editSalesperson(salesperson) {
    try {
      const connect = await dbs();
      const { firstname, lastname, contact, id } = salesperson;
      const sql =
        "UPDATE salespersons SET firstname = $1, lastname = $2, contact = $3, updated_at = localtimestamp WHERE salesperson_id = $4 RETURNING *";
      const params = [firstname, lastname, contact, id];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function softDeleteSalesperson(id) {
    try {
      const connect = await dbs();
      const sql =
        "UPDATE salespersons SET is_active = false WHERE salesperson_id = $1 RETURNING *";
      const params = [id];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = salespersonData;
