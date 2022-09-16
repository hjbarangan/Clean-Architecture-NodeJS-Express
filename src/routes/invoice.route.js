const router = require("express").Router();

const {
  postInvoiceController,
  getInvoiceByIdController,
  getAllInvoicesController,
} = require("../controllers/invoice/index");
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index");

router.post("/invoice/create", makeExpressCallback(postInvoiceController));
router.get("/invoice/view/:id", makeExpressCallback(getInvoiceByIdController));
router.get("/invoice",  makeExpressCallback(getAllInvoicesController));

module.exports = router;
