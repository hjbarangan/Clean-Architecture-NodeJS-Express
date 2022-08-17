const carDB = require("../../data-access/cars/index");
// const carEntity = require("../../entities/cars/index")

const addCar = require("./add-car.usecase");

const addCarUseCase = addCar({ carDB });

const carServices = Object.freeze({
  addCarUseCase,
});

module.exports = carServices;
module.exports = {
  addCarUseCase,
};
// module.exports = {
//   addCategory,
//   categoriesSelectAlls,
//   categorySelectOnes,
//   updateCategorys,
//   categorySelectAllFilterTeams
// };
