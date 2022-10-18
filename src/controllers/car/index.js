const {
  addCarUseCase,
  editCarUseCase,
  viewAllCarsUseCase,
  viewCarUseCase,
  viewAllCarsForSaleUseCase,
  softDeleteCarUseCase
} = require("../../use-cases/car/index");


const addCarController = require("./add-car.controller");
const editCarController = require("./edit-car.controller");
const fetchAllCarsController = require("./get-all-cars.controller");
const fetchCarDetailsController = require("./get-car-details.controller");
const deleteCarController = require("./soft-delete-car.controller");
const fetchAllCarsForSaleController = require("./get-cars-for-sale.controller");


const postCarController = addCarController({ addCarUseCase });
const putCarController = editCarController({ editCarUseCase });
const getAllCarsController = fetchAllCarsController({ viewAllCarsUseCase });
const getCarByIdController = fetchCarDetailsController({ viewCarUseCase });
const softDeleteCarController = deleteCarController({ softDeleteCarUseCase });
const getAllCarsForSaleController = fetchAllCarsForSaleController({
  viewAllCarsForSaleUseCase
});

const controller = Object.freeze({
  postCarController,
  putCarController,
  getAllCarsController,
  getCarByIdController,
  softDeleteCarController,
  getAllCarsForSaleController
});

module.exports = controller;

module.exports = {
  postCarController,
  putCarController,
  getAllCarsController,
  getCarByIdController,
  softDeleteCarController,
  getAllCarsForSaleController
};
