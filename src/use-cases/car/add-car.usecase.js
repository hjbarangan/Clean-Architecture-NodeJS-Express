const carEntity = require("../../entities/cars/index");

const addCar = ({ carDB }) => {
  return async function postCar(data) {
    const result = carEntity(data);
    const carExists = await carDB.findBySerial(result.serial_number);

    if (carExists.rowCount !== 0) {
      const result = {
        msg: "Car already exists",
        car: carExists.rows[0],
      };
      return result;
    }

    return carDB.addCar({
      serial_number: result.serial_number,
      brand: result.brand,
      model: result.model,
      color: result.color,
      year: result.year,
      car_for_sale: result.car_for_sale,
    });
  };
};
module.exports = addCar;

// const makeCategory = require("../../entities/categories/app");

// const makeAddCategory = ({ categoriesDb }) => {
//   return async function posts(info) {
//     const result = makeCategory(info);
//     const categoryExists = await categoriesDb.findByName(result.getName());

//     const rows = categoryExists.rows;

//     if (categoryExists.rowCount !== 0) {
//       const result = {
//         msg: "Category already exists!",
//         command: categoryExists.command,
//         rows
//       };
//       return result;
//     }

//     return categoriesDb.insert({
//       name: result.getName(),
//       description: result.getDescription(),
//       teams_id: result.getTeam(),
//       time_limit_on_seconds: result.getTimeLimit()
//     });
//   };
// };

// module.exports = makeAddCategory;
