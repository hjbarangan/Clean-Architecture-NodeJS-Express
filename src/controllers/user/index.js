const { addUserUseCase } = require("../../use-cases/user/index");

const addUserController = require("./add-user.controller");

const postUserController = addUserController({ addUserUseCase });

const controller = Object.freeze({ postUserController });

module.exports = controller;

module.exports = { postUserController };
