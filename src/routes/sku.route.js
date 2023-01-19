const router = require("express").Router();

const {
  postSkuController,
  putSkuController,
  getSkuByIdController,
  getAllSkuController,
  softDeleteSkuController
} = require("../controllers/sku/index");
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index");

router.post("/sku/add", authMiddleware, makeExpressCallback(postSkuController));
router.put("/sku/edit/:id", authMiddleware, makeExpressCallback(putSkuController));
router.get("/sku/view/:id", authMiddleware, makeExpressCallback(getSkuByIdController));
router.get("/sku", authMiddleware, makeExpressCallback(getAllSkuController));
router.patch("/sku/delete/:id", authMiddleware, makeExpressCallback(softDeleteSkuController))

module.exports = router;
