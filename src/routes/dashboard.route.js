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
  "/weekly-sales" ,
  makeExpressCallback(getCustomersCountController)
);
router.get(
  "/monthly-sales" ,
  makeExpressCallback(getMonthlyRevenueController)
);
router.get(
  "/top-sellers", authMiddleware ,
  makeExpressCallback(getTopSellersController)
);
router.get(
  "/daily-sales" ,
  makeExpressCallback(getSalesNumberController)
);

module.exports = router;
