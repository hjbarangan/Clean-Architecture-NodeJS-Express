const router = require("express").Router();

const { postCarController, putCarController, getAllCarsController, getCarByIdController } = require("../controllers/car/index")
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index")

router.post("/cars/add", authMiddleware, makeExpressCallback(postCarController));
router.patch("/cars/edit/:id", authMiddleware, makeExpressCallback(putCarController) );
router.get("/cars", authMiddleware, makeExpressCallback(getAllCarsController));
router.get("/cars/view/:id", authMiddleware, makeExpressCallback(getCarByIdController));

// const authorization = require("../middleware/auth.middleware");
// const { upload } = require("../middleware/upload");

// const {
//   getCars,
//   addCar,
//   getCarById,
//   editCar,
//   deleteCar,
//   deleteAllCars,
// } = require("../controllers/Car.controller");

// router.get("/cars",authorization, getCars);
// router.get("/cars/view/:id", authorization, getCarById);
// router.post("/cars/add", upload.single("image_file"), authorization, addCar);
// router.put("/cars/edit/:id", upload.single("image_file"), authorization, editCar);
// router.delete("/cars/delete/:id", authorization, deleteCar);
// router.delete("/cars/delete-all", authorization, deleteAllCars);

module.exports = router;
