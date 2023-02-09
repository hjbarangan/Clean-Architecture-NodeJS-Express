const partDB = require("../../data-access/part/index");
const partEntity = require("../../entities/part/index");

const addPart = require("./add-part.usecase");
const editPart = require("./edit-part.usecase");
const viewPart = require("./view-part.usecase");
const viewAllPart = require("./view-all-part.usecase");
const softDelPart = require("./delete-part.usecase");

const addPartUseCase = addPart({
  partDB,
  partEntity
});
const editPartUseCase = editPart({
  partDB,
  partEntity
});
const viewPartUseCase = viewPart({ partDB });
const viewAllPartUseCase = viewAllPart({ partDB });
const softDeletePartUseCase = softDelPart({ partDB });

module.exports = {
  addPartUseCase,
  editPartUseCase,
  viewPartUseCase,
  viewAllPartUseCase,
  softDeletePartUseCase
};
