const router = require("express").Router();

const {
  postServiceController,
  putServiceController,
  getServiceByIdController,
  getAllServiceController,
  softDeleteServiceController,
  postServiceItemController,
  getAllServiceItemsController,
  putServiceItemController
} = require("../controllers/service/index");
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index");

router.post("/service/add", makeExpressCallback(postServiceController));
router.patch("/service/edit/:id", authMiddleware, makeExpressCallback(putServiceController));
router.get("/service/view/:id", authMiddleware, makeExpressCallback(getServiceByIdController));
router.get("/service", makeExpressCallback(getAllServiceController));
router.patch("/service/delete/:id", authMiddleware, makeExpressCallback(softDeleteServiceController))

//service item
router.post("/service-item/add", authMiddleware, makeExpressCallback(postServiceItemController));
router.patch("/service-item/edit/:id", authMiddleware, makeExpressCallback(putServiceItemController));
router.get("/service-item/view/:id", authMiddleware, makeExpressCallback(getServiceByIdController));
router.get("/service-items", authMiddleware, makeExpressCallback(getAllServiceItemsController));
router.patch("/service-item/delete/:id", authMiddleware, makeExpressCallback(softDeleteServiceController))


module.exports = router;
