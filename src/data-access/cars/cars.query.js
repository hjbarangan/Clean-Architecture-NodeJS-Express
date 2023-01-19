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
    const sql = "SELECT * FROM product_car ORDER BY product_car_id DESC";
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
    const { sku_id, serial_number, brand_name, model, color } = car;

    const sql =
      "INSERT INTO product_car (sku_id, serial_number, brand_name, model, color, date_created) VALUES ( $1, $2, $3, $4, $5, localtimestamp) RETURNING *;";

    const params = [sku_id, serial_number, brand_name, model, color];

    return connect.query(sql, params);
  }

  async function editCar(car) {
    const connect = await dbs();
    const { sku_id, serial_number, brand_name, model, color, id } = car;
    const sql =
      "UPDATE product_car SET serial_number = $1, brand_name = $2, model = $3, color = $4, sku_id = $5, date_created = localtimestamp WHERE product_car_id = $6 RETURNING *";
    const params = [sku_id, serial_number, brand_name, model, color, id];
    return connect.query(sql, params);
  }

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
