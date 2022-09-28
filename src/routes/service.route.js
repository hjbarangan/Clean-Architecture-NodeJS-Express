const router = require("express").Router();

const {
  postServiceController,
  putServiceController,
  getServiceByIdController,
  getAllServiceController,
  softDeleteServiceController
} = require("../controllers/service/index");
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index");

router.post("/service/add", authMiddleware, makeExpressCallback(postServiceController));
router.put("/service/edit/:id", authMiddleware, makeExpressCallback(putServiceController));
router.get("/service/view/:id", authMiddleware, makeExpressCallback(getServiceByIdController));
router.get("/service", authMiddleware, makeExpressCallback(getAllServiceController));
router.patch("/service/delete/:id", authMiddleware, makeExpressCallback(softDeleteServiceController))

module.exports = router;
