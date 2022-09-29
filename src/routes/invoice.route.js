const router = require("express").Router();

const {
  postInvoiceController,
  getInvoiceByIdController,
  getAllInvoicesController,
} = require("../controllers/invoice/index");
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index");

router.post("/invoice/create", authMiddleware, makeExpressCallback(postInvoiceController));
router.get("/invoice/view/:id", authMiddleware, makeExpressCallback(getInvoiceByIdController));
router.get("/invoice", authMiddleware, makeExpressCallback(getAllInvoicesController));

module.exports = router;
