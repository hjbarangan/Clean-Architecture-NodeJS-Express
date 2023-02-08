const {
  addMechanicUseCase,
  editMechanicUseCase,
  viewMechanicUseCase,
  viewAllMechanicUseCase,
  softDeleteMechanicUseCase
} = require("../../use-cases/mechanic/index");

const addMechanicController = require("./add-mechanic.controller");
const editMechanicController = require("./edit-mechanic.controller");
const fetchAllMechanicsController = require("./get-all-mechanics.controller");
const fetchMechanicDetailsController = require("./get-mechanic-details.controller");
const deleteMechanicController = require("./soft-delete-mechanic.controller");

const postMechanicController = addMechanicController({
  addMechanicUseCase
});
const putMechanicController = editMechanicController({
  editMechanicUseCase
});
const getAllMechanicController = fetchAllMechanicsController({
  viewAllMechanicUseCase
});
const getMechanicByIdController = fetchMechanicDetailsController({
  viewMechanicUseCase
});

const softDeleteMechanicController = deleteMechanicController({
  softDeleteMechanicUseCase
});

module.exports = Object.freeze({
  postMechanicController,
  putMechanicController,
  getAllMechanicController,
  getMechanicByIdController,
  softDeleteMechanicController
});
