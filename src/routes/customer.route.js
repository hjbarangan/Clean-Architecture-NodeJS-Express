const router = require("express").Router();

const {
  postCustomerController,
  putCustomerController,
  getAllCustomersController,
  getCustomerByIdController,
} = require("../controllers/customer/index");

const makeExpressCallback = require("../express-callback/index");

router.post("/customers/add", makeExpressCallback(postCustomerController));
router.put("/customers/edit/:id", makeExpressCallback(putCustomerController));
router.get("/customers", makeExpressCallback(getAllCustomersController));
router.get(
  "/customers/view/:id",
  makeExpressCallback(getCustomerByIdController)
);

module.exports = router;
