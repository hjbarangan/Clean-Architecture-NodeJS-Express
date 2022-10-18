const mechanicDB = require("../../data-access/mechanic/index");
const mechanicEntity = require("../../entities/mechanics/index");

const addMechanic = require("./add-mechanic.usecase");
const editMechanic = require("./edit-mechanic.usecase");
const viewMechanic = require("./view-mechanic.usecase");
const viewAllMechanic = require("./view-all-mechanic.usecase");
const softDelMechanic = require("./delete-mechanic.usecase");

const addMechanicUseCase = addMechanic({
  mechanicDB,
  mechanicEntity
});
const editMechanicUseCase = editMechanic({
  mechanicDB,
  mechanicEntity
});
const viewMechanicUseCase = viewMechanic({ mechanicDB });
const viewAllMechanicUseCase = viewAllMechanic({ mechanicDB });
const softDeleteMechanicUseCase = softDelMechanic({ mechanicDB });

const mechanicService = Object.freeze({
  addMechanicUseCase,
  editMechanicUseCase,
  viewMechanicUseCase,
  viewAllMechanicUseCase,
  softDeleteMechanicUseCase
});

module.exports = mechanicService;

module.exports = {
  addMechanicUseCase,
  editMechanicUseCase,
  viewMechanicUseCase,
  viewAllMechanicUseCase,
  softDeleteMechanicUseCase
};
