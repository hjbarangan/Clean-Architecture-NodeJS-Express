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
    try {
      const connect = await dbs();
      const sql =
        "SELECT p.product_parts_id, p.printname, p.barcode, p.date_created, sku.unit, sku.cost, ST.qty FROM product_parts p JOIN sku ON sku.sku_id = p.sku_id INNER JOIN stockard ST ON sku.sku_id = ST.sku_id ORDER BY p.product_parts_id DESC";
      return connect.query(sql);
    } catch (error) {
      console.log(error);
    }
  }

  async function getPartById(id) {
    try {
      const connect = await dbs();
      const sql = "SELECT * FROM product_parts WHERE product_parts_id = $1";
      const params = [id];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function addPart(part) {
    try {
      const connect = await dbs();
      const { unit, cost, printname, barcode, qty, qtybalance } = part;

      const insetSkuSQL =
        "INSERT INTO sku (unit, cost, date_created, is_active) VALUES ( $1, $2, localtimestamp, true) RETURNING *;";

      const skuParams = [unit, cost];
      const skuRes = await connect.query(insetSkuSQL, skuParams);
      const skuId = skuRes.rows[0].sku_id;

      const sql =
        "INSERT INTO product_parts ( sku_id, printname, barcode, date_created) VALUES ( $1, $2, $3, localtimestamp) RETURNING *;";

      const params = [skuId, printname, barcode];

      const res = await connect.query(sql, params);
      const productID = res.rows[0].product_parts_id;
      const qtySql =
        "INSERT INTO stockard (sku_id, qty, qtybalance, date_created) VALUES ( $1, $2, $3, localtimestamp) RETURNING *;";
      const qtyParams = [skuId, qty, qty];
      await connect.query(qtySql, qtyParams);

      const returnSQL =
        "SELECT C.product_parts_id, C.printname, C.barcode, C.date_created, S.cost, S.unit, ST.qty, ST.qtybalance FROM product_parts C INNER JOIN sku S ON  C.sku_id = S.sku_id INNER JOIN stockard ST ON S.sku_id = ST.sku_id WHERE product_parts_id = $1";

      return connect.query(returnSQL, [productID]);
    } catch (error) {
      console.log(error);
    }
  }

  async function editPart(part) {
    const connect = await dbs();
    const { unit, cost, printname, barcode, id } = part;
    const sql =
      "UPDATE product_parts SET  printname = $1, barcode = $2 WHERE product_parts_id = $3 RETURNING *";
    const params = [printname, barcode, id];
    const partRes = await connect.query(sql, params);
    const skuId = partRes.rows[0].sku_id;

    const updateSkuSql =
      "UPDATE sku SET unit = $1, cost = $2 WHERE sku_id = $3 RETURNING *";

    await connect.query(updateSkuSql, [unit, cost, skuId]);

    const returnSQL =
      "SELECT p.printname, p.barcode, sku.unit, sku.cost FROM product_parts p JOIN sku ON sku.sku_id = p.sku_id WHERE p.product_parts_id = $1";

    return connect.query(returnSQL, [id]);
  }

  async function softDeletePart(id) {
    try {
      const connect = await dbs();
      const sql =
        "UPDATE parts SET is_active = false WHERE product_parts_id = $1 RETURNING *";
      const params = [id];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function findByPartName(printname) {
    try {
      const connect = await dbs();
      const sql = "SELECT * FROM product_parts WHERE printname = $1";
      const params = [printname];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = partData;
