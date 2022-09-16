const router = require("express").Router();

const { postCarController, putCarController, getAllCarsController, getCarByIdController, softDeleteCarController, getAllCarsForSaleController } = require("../controllers/car/index")
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index")

router.post("/cars/add", makeExpressCallback(postCarController));
router.patch("/cars/edit/:id",  makeExpressCallback(putCarController) );
router.get("/cars", makeExpressCallback(getAllCarsController));
router.get("/cars/view/:id",  makeExpressCallback(getCarByIdController));
router.patch("/cars/delete/:id",  makeExpressCallback(softDeleteCarController));
router.get("/cars/for-sale", makeExpressCallback(getAllCarsForSaleController))

module.exports = router;
