const mechanicData = ({ dbs }) => {
    return Object.freeze({
      getAllMechanics,
      getMechanicById,
      addMechanic,
      editMechanic,
      softDeleteMechanic,
    });
  
    async function getAllMechanics() {
      const connect = await dbs();
      const sql =
        "SELECT * FROM mechanics WHERE NOT is_active IN (false) ORDER BY mechanic_id DESC";
      return connect.query(sql);
    }
  
    async function getMechanicById(id) {
      const connect = await dbs();
      const sql = "SELECT * FROM mechanics WHERE mechanic_id = $1";
      const params = [id];
      return connect.query(sql, params);
    }
  
    async function addMechanic(mechanic) {
      const connect = await dbs();
      const { firstname, lastname, contact } = mechanic;
      const params = [firstname, lastname, contact];
      console.log(params);
      const sql =
        "INSERT INTO mechanics (firstname, lastname, contact, is_active, created_at, updated_at) VALUES ( $1, $2, $3, true, localtimestamp, localtimestamp) RETURNING *;";
      return connect.query(sql, params);
    }
  
    async function editMechanic(mechanic) {
      const connect = await dbs();
      const { firstname, lastname, contact, id } = mechanic;
      const sql =
        "UPDATE mechanics SET firstname = $1, lastname = $2, contact = $j, updated_at = localtimestamp WHERE mechanic_id = $4 RETURNING *";
      const params = [firstname, lastname, contact, id];
      return connect.query(sql, params);
    }
  
    async function softDeleteMechanic(id) {
      const connect = await dbs();
      const sql =
        "UPDATE mechanics SET is_active = false WHERE mechanic_id = $1 RETURNING *";
      const params = [id];
      return connect.query(sql, params);
    }
  };
  
  module.exports = mechanicData;
  