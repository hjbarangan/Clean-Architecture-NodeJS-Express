const carData = ({ dbs }) => {
  return Object.freeze({
    //insert functions

    addCar,
    findBySerial
  });


//insert here the queries

// const getAllCars = async ({}) => {
//   const connect = await dbs();

//   const sql = "SELECT * FROM cars";

//   return connect.query(sql);
// };

// const getCarById = async (id) => {
//   const connect = await dbs();

//   const sql = "SELECT * FROM cars WHERE car_id = $1";

//   const params = [id];

//   return connect.query(sql, params);
// };

async function addCar({ ...info } ) {
  const connect = await dbs();

  const params = [info.serial_number, info.brand, info.model, info.color, info.year, info.car_for_sale];

  const sql = "INSERT INTO cars (serial_number, brand, model, color, year, car_for_sale) VALUES ( $1, $2, $3, $4, $5, $6) RETURNING *;";

  return connect.query(sql, params);
};

// const editCar = async ({ carInfo, id}) => {
//   const connect = await dbs();

//   const sql =
//     "UPDATE cars SET serial_number = $1, brand = $2, model = $3, color = $4, year = $5 , car_for_sale = $6, WHERE car_id = $7 RETURNING *";

//   const params = [
//     carInfo.serial_number,
//     carInfo.brand,
//     carInfo.model,
//     carInfo.color,
//     carInfo.year,
//     carInfo.car_for_sale,
//     id,
//   ];

//   return connect.query(sql, params);
// };


async function findBySerial ({serial_number}) {
  const connect = await dbs();

  const sql = "SELECT * FROM cars WHERE serial_number = $1";

  const params = [serial_number]

  return connect.query(sql, params);

};
};

// async function findByName(name) {
//   const db = await dbs();
//   const sql = "SELECT * FROM (SELECT * FROM categories WHERE LOWER(name) <> LOWER('GENERAL')) AS category_list WHERE LOWER(name)=LOWER($1);";
//   const params = [name];
//   return db.query(sql, params);
// }

// async function distinctBook ({ serial }){
//   try {
//       const conn = await connects()

//       const response = await new Promise((resolve) =>{
//           let sql = `SELECT * FROM books WHERE serial =$1`;
//           let params = [serial];
//           conn.query(sql, params, (err, res) => {
//               conn.end();
//               if (err) resolve(err)
//               resolve(res)
//           });
//       })
//       return response
//   } catch (error) {
//       console.log("Error: ", error);
//   }
// }

module.exports = carData;
