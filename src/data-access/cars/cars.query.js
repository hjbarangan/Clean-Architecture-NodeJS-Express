const carData = ({ dbs }) => {
  return Object.freeze({
    getAllCars,
    getCarById,
    addCar,
    editCar,
    softDeleteCar,
    findBySerial,
  });

  async function getAllCars() {
    const connect = await dbs();
    const sql = "SELECT * FROM cars";
    return connect.query(sql);
  }

  async function getCarById(id) {
    const connect = await dbs();
    const sql = "SELECT * FROM cars WHERE car_id = $1";
    const params = [id];
    return connect.query(sql, params);
  }

  async function addCar(car) {
    const connect = await dbs();
    const { serial_number, brand, model, color, year, car_for_sale, price } = car;
    const sql =
      "INSERT INTO cars (serial_number, brand, model, color, year, car_for_sale, price) VALUES ( $1, $2, $3, $4, $5, $6, $7) RETURNING *;";
    const params = [serial_number, brand, model, color, year, car_for_sale, price];
    return connect.query(sql, params);
  }

  async function editCar(car) {
    const connect = await dbs();
    const { serial_number, brand, model, color, year, car_for_sale, price, id } = car;
    const sql =
      "UPDATE cars SET serial_number = $1, brand = $2, model = $3, color = $4, year = $5 , car_for_sale = $6, price = $7 WHERE car_id = $8 RETURNING *";
    const params = [serial_number, brand, model, color, year, car_for_sale, price, id];
    return connect.query(sql, params);
  }

  async function softDeleteCar(id) {
    const connect = await dbs();
    const sql =
      "UPDATE cars SET status = false WHERE car_id = $1 RETURNING *";
    const params = [id];
    return connect.query(sql, params);
  }

  async function findBySerial(serial_number) {
    const connect = await dbs();
    const sql = "SELECT * FROM cars WHERE serial_number = $1";
    const params = [serial_number];
    return connect.query(sql, params);
  }
};

module.exports = carData;
