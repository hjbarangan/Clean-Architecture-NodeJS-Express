const carDB = require("../../data-access/cars/index");
const carEntity = require("../../entities/cars/index");

const addCar = require("./add-car.usecase");
const editCar = require("./edit-car.usecase");
const viewAllCars = require("./view-all-cars.usecase");
const viewCar = require("./view-car.usecase");
const softDelCar = require("./delete-car.usecase");

const addCarUseCase = addCar({ carDB, carEntity });
const editCarUseCase = editCar({ carDB, carEntity });
const viewAllCarsUseCase = viewAllCars({ carDB });
const viewCarUseCase = viewCar({ carDB });
const softDeleteCarUseCase = softDelCar({ carDB });

const carServices = Object.freeze({
  addCarUseCase,
  editCarUseCase,
  viewAllCarsUseCase,
  viewCarUseCase,
  softDeleteCarUseCase,
});

module.exports = carServices;

module.exports = {
  addCarUseCase,
  editCarUseCase,
  viewAllCarsUseCase,
  viewCarUseCase,
  softDeleteCarUseCase,
};
