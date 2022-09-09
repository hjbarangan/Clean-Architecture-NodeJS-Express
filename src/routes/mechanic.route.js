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

router.post("/mechanic/add", authMiddleware, makeExpressCallback(postMechanicController));
router.put("/mechanic/edit/:id", authMiddleware, makeExpressCallback(putMechanicController));
router.get("/mechanic/:id", authMiddleware, makeExpressCallback(getMechanicByIdController));
router.get("/mechanic", makeExpressCallback(getAllMechanicController));
router.patch("/mechanic/delete/:id", authMiddleware, makeExpressCallback(softDeleteMechanicController))

module.exports = router;
