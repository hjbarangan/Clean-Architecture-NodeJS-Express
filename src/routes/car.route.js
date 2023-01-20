const router = require("express").Router();

const { postCarController, putCarController, getAllCarsController, getCarByIdController, softDeleteCarController, getAllCarsForSaleController } = require("../controllers/car/index")
const { upload } = require("../middleware/upload.middleware")
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index")


router.post("/car/add", authMiddleware, upload.single("image_file"),  makeExpressCallback(postCarController));
router.patch("/car/edit/:id", authMiddleware, upload.single("image_file"), makeExpressCallback(putCarController) );
router.get("/cars", authMiddleware, makeExpressCallback(getAllCarsController));
router.get("/car/view/:id", authMiddleware,  makeExpressCallback(getCarByIdController));
router.patch("/car/delete/:id", authMiddleware,  makeExpressCallback(softDeleteCarController));
router.get("/car/for-sale", authMiddleware, makeExpressCallback(getAllCarsForSaleController))

module.exports = router;
