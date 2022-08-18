const { addCarUseCase, editCarUseCase, viewAllCarsUseCase, viewCarUseCase } = require("../../use-cases/car/index");

//insert controller functions

const addCarController = require("./add-car.controller");
const editCarController = require("./edit-car.controller");
const fetchAllCarsController = require("./get-all-cars.controller");
const fetchCarDetailsController = require("./get-car-details.controller");

//insert controller functions with usecase function

const postCarController = addCarController({ addCarUseCase });
const putCarController = editCarController({ editCarUseCase})
const getAllCarsController = fetchAllCarsController({ viewAllCarsUseCase });
const getCarByIdController = fetchCarDetailsController ({ viewCarUseCase });

const controller = Object.freeze({
  //insert here the declared const above
  postCarController,
  putCarController,
  getAllCarsController,
  getCarByIdController
});

module.exports = controller;

module.exports = {
  // insert the destructured controller function
  postCarController,
  putCarController,
  getAllCarsController,
  getCarByIdController
};

