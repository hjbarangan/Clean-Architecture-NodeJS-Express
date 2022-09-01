const router = require("express").Router();

const { postCarController, putCarController, getAllCarsController, getCarByIdController, softDeleteCarController } = require("../controllers/car/index")
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index")

router.post("/cars/add", authMiddleware, makeExpressCallback(postCarController));
router.patch("/cars/edit/:id", authMiddleware, makeExpressCallback(putCarController) );
router.get("/cars", authMiddleware, makeExpressCallback(getAllCarsController));
router.get("/cars/view/:id", authMiddleware, makeExpressCallback(getCarByIdController));
router.patch("/cars/delete/:id", authMiddleware, makeExpressCallback(softDeleteCarController));


module.exports = router;
