const router = require("express").Router();

const {
  getWeeklySalesController,
  getMonthlyRevenueController,
  getTopSellersController,
  getDailySalesController,
} = require("../controllers/dashboard/index");

const authMiddleware = require("../middleware/index");
const makeExpressCallback = require("../express-callback/index");

router.get(
  "/weekly-sales" ,
  makeExpressCallback(getWeeklySalesController)
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
  makeExpressCallback(getDailySalesController)
);

module.exports = router;
