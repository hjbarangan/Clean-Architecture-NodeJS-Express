const partData = ({ dbs }) => {
  return Object.freeze({
    getAllParts,
    getPartById,
    addPart,
    editPart,
    findByPartName
  });

  async function getAllParts() {
    const connect = await dbs();
    const sql = "SELECT * FROM product_parts ORDER BY product_parts_id DESC";
    return connect.query(sql);
  }

  async function getPartById(id) {
    const connect = await dbs();
    const sql = "SELECT * FROM product_parts WHERE product_parts_id = $1";
    const params = [id];
    return connect.query(sql, params);
  }

  async function addPart(part) {
    const connect = await dbs();
    const { sku_id, printname, barcode } = part;
    const params = [sku_id, printname, barcode];
    const sql =
      "INSERT INTO product_parts ( sku_id, printname, barcode, date_created) VALUES ( $1, $2, $3, localtimestamp) RETURNING *;";
    return connect.query(sql, params);
  }

  async function editPart(part) {
    const connect = await dbs();
    const { sku_id, printname, barcode, id } = part;
    const sql =
      "UPDATE product_parts SET sku_id = $1, printname = $2, barcode = $3 WHERE product_parts_id = $4 RETURNING *";
    const params = [sku_id, printname, barcode, id];
    return connect.query(sql, params);
  }

  // async function softDeletePart(id) {
  //   const connect = await dbs();
  //   const sql =
  //     "UPDATE parts SET is_active = false WHERE product_parts_id = $1 RETURNING *";
  //   const params = [id];
  //   return connect.query(sql, params);
  // }

  async function findByPartName(part_name) {
    const connect = await dbs();
    const sql = "SELECT * FROM product_parts WHERE printname = $1";
    const params = [printname];
    return connect.query(sql, params);
  }
};

module.exports = partData;
