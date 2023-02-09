const mechanicData = ({ dbs }) => {
  return Object.freeze({
    getAllMechanics,
    getMechanicById,
    addMechanic,
    editMechanic,
    softDeleteMechanic
  });

  async function getAllMechanics() {
    try {
      const connect = await dbs();
      const sql =
        "SELECT * FROM mechanics WHERE NOT is_active IN (false) ORDER BY mechanic_id DESC";
      return connect.query(sql);
    } catch (error) {
      console.log(error);
    }
  }

  async function getMechanicById(id) {
    try {
      const connect = await dbs();
      const sql = "SELECT * FROM mechanics WHERE mechanic_id = $1";
      const params = [id];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function addMechanic(mechanic) {
    try {
      const connect = await dbs();
      const { firstname, lastname, contact } = mechanic;
      const params = [firstname, lastname, contact];
      const sql =
        "INSERT INTO mechanics (firstname, lastname, contact, is_active, created_at, updated_at) VALUES ( $1, $2, $3, true, localtimestamp, localtimestamp) RETURNING *;";
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function editMechanic(mechanic) {
    try {
      const connect = await dbs();
      const { firstname, lastname, contact, id } = mechanic;
      const sql =
        "UPDATE mechanics SET firstname = $1, lastname = $2, contact = $3, updated_at = localtimestamp WHERE mechanic_id = $4 RETURNING *";
      const params = [firstname, lastname, contact, id];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function softDeleteMechanic(id) {
    try {
      const connect = await dbs();
      const sql =
        "UPDATE mechanics SET is_active = false WHERE mechanic_id = $1 RETURNING *";
      const params = [id];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = mechanicData;
