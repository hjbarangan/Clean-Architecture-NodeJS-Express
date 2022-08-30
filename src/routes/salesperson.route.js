const router = require("express").Router();

const {
  postSalespersonController,
  putSalespersonController,
  getSalespersonByIdController,
  getAllSalespersonController,
} = require("../controllers/salesperson/index");
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index");

router.post("/salespersons/add", authMiddleware, makeExpressCallback(postSalespersonController));
router.put("/salesperson/edit/:id", authMiddleware, makeExpressCallback(putSalespersonController));
router.get("/salesperson/:id", authMiddleware, makeExpressCallback(getSalespersonByIdController));
router.get("/salesperson", authMiddleware, makeExpressCallback(getAllSalespersonController));

module.exports = router;
