const router = require("express").Router();

const {
  postCustomerController,
  putCustomerController,
  getAllCustomersController,
  getCustomerByIdController,
  softDeleteCustomerController
} = require("../controllers/customer/index");
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index");

router.post("/customer/add", authMiddleware , makeExpressCallback(postCustomerController));
router.put("/customer/edit/:id", authMiddleware , makeExpressCallback(putCustomerController));
router.get("/customer", authMiddleware , makeExpressCallback(getAllCustomersController));
router.get(
  "/customer/view/:id", authMiddleware ,
  makeExpressCallback(getCustomerByIdController)
);
router.patch("/customer/delete/:id", authMiddleware ,  makeExpressCallback(softDeleteCustomerController))


module.exports = router;
