const { addCarUseCase, editCarUseCase } = require("../../use-cases/car/index");

//insert controller functions

const addCarController = require("./add-car.controller");
const editCarController = require("./edit-car.controller");

//insert controller functions with usecase function

const postCarController = addCarController({ addCarUseCase });
const putCarController = editCarController({ editCarUseCase})

const controller = Object.freeze({
  //insert here the declared const above
  postCarController,
  putCarController
});

module.exports = controller;

module.exports = {
  // insert the destructured controller function
  postCarController,
  putCarController
};
