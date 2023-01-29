const router = require("express").Router();

const {
  postQuotationController,
  getQuotationByIdController,
  getAllQuotationsController,
  getAllProductsController,
} = require("../controllers/quotation/index");
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index");

router.post("/quotation/create", makeExpressCallback(postQuotationController));
router.get("/quotation/view/:id", makeExpressCallback(getQuotationByIdController));
router.get("/quotations", makeExpressCallback(getAllQuotationsController));
router.get("/get-all-products", makeExpressCallback(getAllProductsController));

module.exports = router;
