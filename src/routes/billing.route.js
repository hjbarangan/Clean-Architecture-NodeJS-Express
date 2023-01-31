const router = require("express").Router();

const {
  postBillingController,
  getBillingByIdController,
  getAllBillingsController
} = require("../controllers/billing/index");
const authMiddleware = require("../middleware/index");
const makeExpressCallback = require("../express-callback/index");

router.post(
  "/billing/create",

  makeExpressCallback(postBillingController)
);
router.get(
  "/billing/view/:id",
  authMiddleware,
  makeExpressCallback(getBillingByIdController)
);
router.get(
  "/billings",

  makeExpressCallback(getAllBillingsController)
);

module.exports = router;
