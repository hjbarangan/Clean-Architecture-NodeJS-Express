const carData = ({ dbs }) => {
  return Object.freeze({
    getAllCars,
    getAllCarsForSale,
    getCarById,
    addCar,
    editCar,
    softDeleteCar,
    findBySerial
  });

  async function getAllCars() {
    const connect = await dbs();
    const sql =
      "SELECT * FROM cars WHERE NOT is_active IN (false) ORDER BY car_id DESC";
    return connect.query(sql);
  }

  async function getAllCarsForSale() {
    const connect = await dbs();
    const sql =
      "SELECT * FROM cars WHERE is_active IN (true) and car_for_sale = 'Yes' ORDER BY car_id DESC";
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
    const {
      serial_number,
      brand,
      model,
      color,
      year,
      price,
      brand_new,
      image_file
    } = car;

    const sql =
      "INSERT INTO cars (serial_number, brand, model, color, year, price, brand_new, image_file, car_for_sale, is_active, created_at, updated_at) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, 'Yes', true, localtimestamp, localtimestamp) RETURNING *;";

    const params = [
      serial_number,
      brand,
      model,
      color,
      year,
      price,
      brand_new,
      image_file
    ];

    return connect.query(sql, params);
  }

  async function editCar(car) {
    const connect = await dbs();
    const { serial_number, brand, model, color, year, brand_new, price, image_file, id } =
      car;
    const sql =
      "UPDATE cars SET serial_number = $1, brand = $2, model = $3, color = $4, year = $5 , brand_new = $6, price = $7, image_file = $8,  updated_at = localtimestamp WHERE car_id = $9 RETURNING *";
    const params = [
      serial_number,
      brand,
      model,
      color,
      year,
      brand_new,
      price,
      image_file,
      id
    ];
    return connect.query(sql, params);
  }

  async function softDeleteCar(id) {
    const connect = await dbs();
    const sql =
      "UPDATE cars SET is_active = false WHERE car_id = $1 RETURNING *";
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
