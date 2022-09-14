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

router.post("/customers/add",  makeExpressCallback(postCustomerController));
router.put("/customers/edit/:id", makeExpressCallback(putCustomerController));
router.get("/customers",  makeExpressCallback(getAllCustomersController));
router.get(
  "/customers/view/:id", 
  makeExpressCallback(getCustomerByIdController)
);
router.patch("/customers/delete/:id",  makeExpressCallback(softDeleteCustomerController))


module.exports = router;
