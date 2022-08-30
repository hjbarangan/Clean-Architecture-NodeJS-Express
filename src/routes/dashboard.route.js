const router = require("express").Router();

const {
  getCustomersCountController,
  getMonthlyRevenueController,
  getTopSellersController,
  getSalesNumberController,
} = require("../controllers/dashboard/index");
const authMiddleware = require("../middleware/index");
const makeExpressCallback = require("../express-callback/index");

router.post(
  "/customers-count",
  authMiddleware,
  makeExpressCallback(getCustomersCountController)
);
router.put(
  "/monthly-revenue",
  authMiddleware,
  makeExpressCallback(getMonthlyRevenueController)
);
router.get(
  "/top-sellers",
  authMiddleware,
  makeExpressCallback(getTopSellersController)
);
router.get(
  "/sales-number",
  authMiddleware,
  makeExpressCallback(getSalesNumberController)
);

module.exports = router;
