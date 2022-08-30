const router = require("express").Router();

const {
  postCustomerController,
  putCustomerController,
  getAllCustomersController,
  getCustomerByIdController,
} = require("../controllers/customer/index");
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index");

router.post("/customers/add", authMiddleware, makeExpressCallback(postCustomerController));
router.put("/customers/edit/:id", authMiddleware,makeExpressCallback(putCustomerController));
router.get("/customers", authMiddleware, makeExpressCallback(getAllCustomersController));
router.get(
  "/customers/view/:id",
  makeExpressCallback(getCustomerByIdController)
);

module.exports = router;
