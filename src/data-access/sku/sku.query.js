const skuData = ({ dbs }) => {
    return Object.freeze({
      getAllSku,
      getSkuById,
      addSku,
      editSku,
      softDeleteSku,
      findByServiceName
    });
  
    async function getAllSku() {
      const connect = await dbs();
      const sql =
        "SELECT * FROM sku WHERE NOT is_active IN (false) ORDER BY sku_id DESC";
      return connect.query(sql);
    }
  
    async function getSkuById(id) {
      const connect = await dbs();
      const sql = "SELECT * FROM sku WHERE sku_id = $1";
      const params = [id];
      return connect.query(sql, params);
    }
  
    async function addSku(sku) {
      const connect = await dbs();
      const { unit, cost } = sku;
      const params = [unit, cost];
      const sql =
        "INSERT INTO sku ( unit, cost, is_active, date_created) VALUES ( $1, $2, true, localtimestamp) RETURNING *;";
      return connect.query(sql, params);
    }
  
    async function editSku(sku) {
      const connect = await dbs();
      const { unit, cost, id } = sku;
      const sql =
        "UPDATE sku SET unit = $1, cost = $2 WHERE sku_id = $3 RETURNING *";
      const params = [unit, cost, id];
      return connect.query(sql, params);
    }
  
    async function softDeleteSku(id) {
      const connect = await dbs();
      const sql =
        "UPDATE sku SET is_active = false WHERE sku_id = $1 RETURNING *";
      const params = [id];
      return connect.query(sql, params);
    }

    async function findByServiceName(sku_name) {
      const connect = await dbs();
      const sql = "SELECT * FROM sku WHERE service_name = $1";
      const params = [service_name];
      return connect.query(sql, params);
    }

  };
  
  module.exports = skuData;
  