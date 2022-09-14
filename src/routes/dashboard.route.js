const router = require("express").Router();

const {
  getCustomersCountController,
  getMonthlyRevenueController,
  getTopSellersController,
  getSalesNumberController,
} = require("../controllers/dashboard/index");

const authMiddleware = require("../middleware/index");
const makeExpressCallback = require("../express-callback/index");

router.get(
  "/customers-count",
  makeExpressCallback(getCustomersCountController)
);
router.get(
  "/monthly-revenue",
  makeExpressCallback(getMonthlyRevenueController)
);
router.get(
  "/top-sellers",
  makeExpressCallback(getTopSellersController)
);
router.get(
  "/sales-number",
  makeExpressCallback(getSalesNumberController)
);

module.exports = router;
