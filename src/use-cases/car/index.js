const carDB = require("../../data-access/cars/index");
const carEntity = require("../../entities/cars/index")

const addCar = require("./add-car.usecase");
const editCar = require("./edit-car.usecase");

const addCarUseCase = addCar({ carDB, carEntity });
const editCarUseCase = editCar({ carDB, carEntity });

const carServices = Object.freeze({
  addCarUseCase,
  editCarUseCase
});

module.exports = carServices;

module.exports = {
  addCarUseCase,
  editCarUseCase
};
