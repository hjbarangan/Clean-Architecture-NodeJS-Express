const {
  addPartUseCase,
  editPartUseCase,
  viewPartUseCase,
  viewAllPartUseCase,
  softDeletePartUseCase
} = require("../../use-cases/part/index");

const addPartController = require("./add-part.controller");
const editPartController = require("./edit-part.controller");
const fetchAllPartsController = require("./get-all-parts.controller");
const fetchPartDetailsController = require("./get-part-details.controller");
const deletePartController = require("./soft-delete-part.controller");

const postPartController = addPartController({
  addPartUseCase
});
const putPartController = editPartController({
  editPartUseCase
});
const getAllPartController = fetchAllPartsController({
  viewAllPartUseCase
});
const getPartByIdController = fetchPartDetailsController({
  viewPartUseCase
});

const softDeletePartController = deletePartController({
  softDeletePartUseCase
});

const controller = Object.freeze({
  postPartController,
  putPartController,
  getAllPartController,
  getPartByIdController,
  softDeletePartController
});

module.exports = controller;

module.exports = {
  postPartController,
  putPartController,
  getPartByIdController,
  getAllPartController,
  softDeletePartController
};
