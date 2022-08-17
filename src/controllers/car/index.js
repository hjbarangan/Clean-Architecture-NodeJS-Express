const { addCarUseCase } = require("../../use-cases/car/index");

//insert controller functions

const addCarController = require("./add-car.controller");

//insert controller functions with usecase function

const postCarController = addCarController({ addCarUseCase });

const controller = Object.freeze({
  //insert here the declared const above
  postCarController,
});

module.exports = controller;

module.exports = {
  // insert the destructured controller function
  postCarController
};
