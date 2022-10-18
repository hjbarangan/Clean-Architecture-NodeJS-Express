const salespersonDB = require("../../data-access/salesperson/index");
const salespersonEntity = require("../../entities/salesperson/index");

const addSalesperson = require("./add-salesperson.usecase");
const editSalesperson = require("./edit-salesperson.usecase");
const viewSalesperson = require("./view-salesperson.usecase");
const viewAllSalesperson = require("./view-all-salesperson.usecase");
const softDelSalesperson = require("./delete-salesperson.usecase");

const addSalespersonUseCase = addSalesperson({
  salespersonDB,
  salespersonEntity
});
const editSalespersonUseCase = editSalesperson({
  salespersonDB,
  salespersonEntity
});
const viewSalespersonUseCase = viewSalesperson({ salespersonDB });
const viewAllSalespersonUseCase = viewAllSalesperson({ salespersonDB });
const softDeleteSalespersonUseCase = softDelSalesperson({ salespersonDB });

const salespersonService = Object.freeze({
  addSalespersonUseCase,
  editSalespersonUseCase,
  viewSalespersonUseCase,
  viewAllSalespersonUseCase,
  softDeleteSalespersonUseCase
});

module.exports = salespersonService;

module.exports = {
  addSalespersonUseCase,
  editSalespersonUseCase,
  viewSalespersonUseCase,
  viewAllSalespersonUseCase,
  softDeleteSalespersonUseCase
};
