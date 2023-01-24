const carData = ({ dbs }) => {
  return Object.freeze({
    getAllCars,
    getCarById,
    addCar,
    editCar,
    softDeleteCar,
    findBySerial
  });

  async function getAllCars() {
    const connect = await dbs();
    const sql =
      "SELECT p.product_car_id, p.serial_number, p.brand_name, p.model, p.color, sku.unit, sku.cost, ST.qty FROM product_car p JOIN sku ON sku.sku_id = p.sku_id INNER JOIN stockard ST ON sku.sku_id = ST.sku_id ORDER BY product_car_id DESC";
    return connect.query(sql);
  }

  async function getCarById(id) {
    const connect = await dbs();
    const sql = "SELECT * FROM product_car WHERE product_car_id = $1";
    const params = [id];
    return connect.query(sql, params);
  }

  async function addCar(car) {
    const connect = await dbs();
    const { unit, cost, serial_number, brand_name, model, color, qty } = car;

    const insetSkuSQL =
      "INSERT INTO sku (unit, cost, date_created, is_active) VALUES ( $1, $2, localtimestamp, true) RETURNING *;";

    const skuParams = [unit, cost];
    const skuRes = await connect.query(insetSkuSQL, skuParams);
    const skuId = skuRes.rows[0].sku_id;

    const InsertCarsql =
      "INSERT INTO product_car (sku_id, serial_number, brand_name, model, color, date_created) VALUES ( $1, $2, $3, $4, $5, localtimestamp) RETURNING *;";

    const params = [skuId, serial_number, brand_name, model, color];
    const res = await connect.query(InsertCarsql, params);

    const productID = res.rows[0].product_car_id;
    const qtySql =
      "INSERT INTO stockard (sku_id, qty, qtybalance, date_created) VALUES ( $1, $2, $3, localtimestamp) RETURNING *;";
    const qtyParams = [skuId, qty, qty];
    await connect.query(qtySql, qtyParams);

    const returnSQL =
      "SELECT C.product_car_id, C.serial_number, C.color, C.brand_name, C.model, C.date_created, S.cost, S.unit, ST.qty, ST.qtybalance FROM product_car C INNER JOIN sku S ON  C.sku_id = S.sku_id INNER JOIN stockard ST ON S.sku_id = ST.sku_id WHERE product_car_id = $1";

    return connect.query(returnSQL, [productID]);
  }

  async function editCar(car) {
    const connect = await dbs();
    const { unit, cost, serial_number, brand_name, model, color, id } = car;

    const sql =
      "UPDATE product_car SET serial_number = $1, brand_name = $2, model = $3, color = $4 WHERE product_car_id = $5 RETURNING *";
    const params = [serial_number, brand_name, model, color, id];
    const carRes = await connect.query(sql, params);
    const skuId = carRes.rows[0].sku_id;
    console.log("sku", skuId);
    const updateSkuSql =
      "UPDATE sku SET unit = $1, cost = $2 WHERE sku_id = $3 RETURNING *";

    const skuParams = [unit, cost, skuId];
    await connect.query(updateSkuSql, skuParams);

    const returnSQL =
      "SELECT car.serial_number, car.brand_name, car.model, car.color, sku.unit, sku.cost FROM product_car car JOIN sku ON sku.sku_id = car.sku_id WHERE car.product_car_id = $1";

    return connect.query(returnSQL, [id]);
  }

  //Combined qty
  // async function addCar(car) {
  //   const connect = await dbs();
  //   const { serial_number, brand_name, model, color, unit, cost, qty } = car;

  //   const sql =
  //     "INSERT INTO product_car (serial_number, brand_name, model, color, unit, cost, qty, date_created) VALUES ( $1, $2, $3, $4, $5, $6, $7, localtimestamp) RETURNING *;";

  //   const params = [serial_number, brand_name, model, color, unit, cost, qty];

  //   return connect.query(sql, params);
  // }

  // async function editCar(car) {
  //   const connect = await dbs();
  //   const { serial_number, brand_name, model, color, unit, cost, qty, id } =
  //     car;
  //   const sql =
  //     "UPDATE product_car SET serial_number = $1, brand_name = $2, model = $3, color = $4, unit = $5, cost = $6, qty = $7, date_created = localtimestamp WHERE product_car_id = $8 RETURNING *";
  //   const params = [
  //     serial_number,
  //     brand_name,
  //     model,
  //     color,
  //     unit,
  //     cost,
  //     qty,
  //     id
  //   ];
  //   return connect.query(sql, params);
  // }

  async function softDeleteCar(id) {
    const connect = await dbs();
    const sql =
      "UPDATE product_car SET is_active = false WHERE car_id = $1 RETURNING *";
    const params = [id];
    return connect.query(sql, params);
  }

  async function findBySerial(serial_number) {
    const connect = await dbs();
    const sql = "SELECT * FROM product_car WHERE serial_number = $1";
    const params = [serial_number];
    return connect.query(sql, params);
  }
};

module.exports = carData;
