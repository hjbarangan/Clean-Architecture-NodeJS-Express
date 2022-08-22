const userDB = require("../../data-access/users/index");
const userEntity = require("../../entities/users/index");


const addUser = require("./add-user.usecase")

const addUserUseCase = addUser({ userDB, userEntity });

// const editCarUseCase = editCar({ carDB, carEntity });
// const viewAllCarsUseCase = viewAllCars({ carDB });
// const viewCarUseCase = viewCar({ carDB });

const userServices = Object.freeze({
  addUserUseCase

//   editCarUseCase,
//   viewAllCarsUseCase,
//   viewCarUseCase,
});

module.exports = userServices;

module.exports = {
    addUserUseCase
};
