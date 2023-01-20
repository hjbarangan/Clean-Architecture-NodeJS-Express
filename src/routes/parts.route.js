const router = require("express").Router();

const {
  postPartController,
  putPartController,
  getPartByIdController,
  getAllPartController,
  softDeletePartController
} = require("../controllers/part/index");
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index");

router.post("/part/add", authMiddleware, makeExpressCallback(postPartController));
router.patch("/part/edit/:id", authMiddleware, makeExpressCallback(putPartController));
router.get("/part/view/:id", authMiddleware, makeExpressCallback(getPartByIdController));
router.get("/parts", authMiddleware, makeExpressCallback(getAllPartController));
router.patch("/part/delete/:id", authMiddleware, makeExpressCallback(softDeletePartController))

module.exports = router;
