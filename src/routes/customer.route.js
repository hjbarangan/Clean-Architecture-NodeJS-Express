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

router.post("/customer/add",  makeExpressCallback(postCustomerController));
router.put("/customer/edit/:id", makeExpressCallback(putCustomerController));
router.get("/customer",  makeExpressCallback(getAllCustomersController));
router.get(
  "/customer/view/:id", 
  makeExpressCallback(getCustomerByIdController)
);
router.patch("/customer/delete/:id",  makeExpressCallback(softDeleteCustomerController))


module.exports = router;
