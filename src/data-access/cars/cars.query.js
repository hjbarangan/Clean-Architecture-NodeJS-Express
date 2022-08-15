const carData = ({ dbConnection }) => {
  return Object.freeze({
    //insert functions
    getAllCars,
    getCarById,
    addCar,
    editCar,
  });
};

//insert here the queries

const getAllCars = async ({}) => {
  const connect = await dbConnection();

  const sql = "SELECT * FROM cars";

  return connect.query(sql);
};

const getCarById = async (id) => {
  const connect = await dbConnection();

  const sql = "SELECT * FROM cars WHERE car_id = $1";

  const params = [id];

  return connect.query(sql, params);
};

const addCar = async ({ carInfo }) => {
  const connect = await dbConnection();

  const carInfo = [serial_number, brand, model, color, year, car_status];

  const sql = "INSERT INTO cars VALUES ( $1, $2, $3, $4, $5, $6) RETURNING *;";

  return connect.query(sql, carInfo);
};

const editCar = async (carInfo, id) => {
  const connect = await dbConnection();

  const sql =
    "UPDATE cars SET serial_number = $1, brand = $2, model = $3, color = $4, year = $5 , car_for_sale = $6, image_file = $7 WHERE car_id = $8 RETURNING *";

  const params = [
    carInfo.serial_number,
    carInfo.brand,
    carInfo.model,
    carInfo.color,
    carInfo.year,
    carInfo.car_for_sale,
    carInfo.image_file,
    id,
  ];

  return connect.query(sql, params);
};
