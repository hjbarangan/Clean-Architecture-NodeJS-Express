const router = require("express").Router();

const { postCarController, putCarController } = require("../controllers/car/index")

const makeExpressCallback = require("../express-callback/index")

router.post("/cars/add", makeExpressCallback(postCarController));
router.put("/cars/edit/:id", makeExpressCallback(putCarController) );
// router.get("/cars",authorization, getCars);
// router.get("/cars/view/:id", authorization, getCarById);

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
