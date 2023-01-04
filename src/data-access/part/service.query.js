const partData = ({ dbs }) => {
    return Object.freeze({
      getAllParts,
      getPartById,
      addPart,
      editPart,
      softDeletePart,
      findByPartName
    });
  
    async function getAllParts() {
      const connect = await dbs();
      const sql =
        "SELECT * FROM parts WHERE NOT is_active IN (false) ORDER BY part_id DESC";
      return connect.query(sql);
    }
  
    async function getPartById(id) {
      const connect = await dbs();
      const sql = "SELECT * FROM parts WHERE part_id = $1";
      const params = [id];
      return connect.query(sql, params);
    }
  
    async function addPart(part) {
      const connect = await dbs();
      const { part_name, purchase_price, retail_price } = part;
      const params = [part_name, purchase_price, retail_price];
      const sql =
        "INSERT INTO parts ( part_name, purchase_price, retail_price, is_active, created_at, updated_at) VALUES ( $1, $2, $3, true, localtimestamp, localtimestamp) RETURNING *;";
      return connect.query(sql, params);
    }
  
    async function editPart(part) {
      const connect = await dbs();
      const { part_name, purchase_price, retail_price, id } = part;
      const sql =
        "UPDATE parts SET part_name = $1, purchase_price = $2, retail_price = $2, updated_at = localtimestamp WHERE part_id = $3 RETURNING *";
      const params = [part_name, purchase_price, retail_price, id];
      return connect.query(sql, params);
    }
  
    async function softDeletePart(id) {
      const connect = await dbs();
      const sql =
        "UPDATE parts SET is_active = false WHERE part_id = $1 RETURNING *";
      const params = [id];
      return connect.query(sql, params);
    }

    async function findByPartName(part_name) {
      const connect = await dbs();
      const sql = "SELECT * FROM parts WHERE part_name = $1";
      const params = [part_name];
      return connect.query(sql, params);
    }

  };
  
  module.exports = partData;
  