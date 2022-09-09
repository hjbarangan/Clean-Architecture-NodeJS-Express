const router = require("express").Router();

const {
  postMechanicController,
  putMechanicController,
  getMechanicByIdController,
  getAllMechanicController,
  softDeleteMechanicController
} = require("../controllers/mechanic/index");
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index");

router.post("/mechanic/add", makeExpressCallback(postMechanicController));
router.put("/mechanic/edit/:id", makeExpressCallback(putMechanicController));
router.get("/mechanic/:id",  makeExpressCallback(getMechanicByIdController));
router.get("/mechanic", makeExpressCallback(getAllMechanicController));
router.patch("/mechanic/delete/:id", makeExpressCallback(softDeleteMechanicController))

module.exports = router;
