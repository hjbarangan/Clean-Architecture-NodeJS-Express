const router = require("express").Router();

const {
  postSalespersonController,
  putSalespersonController,
  getSalespersonByIdController,
  getAllSalespersonController,
  softDeleteSalespersonController
} = require("../controllers/salesperson/index");
const authMiddleware = require("../middleware/index")
const makeExpressCallback = require("../express-callback/index");

router.post("/salesperson/add", authMiddleware , makeExpressCallback(postSalespersonController));
router.put("/salesperson/edit/:id", authMiddleware , makeExpressCallback(putSalespersonController));
router.get("/salesperson/view/:id", authMiddleware , makeExpressCallback(getSalespersonByIdController));
router.get("/salesperson", authMiddleware , makeExpressCallback(getAllSalespersonController));
router.patch("/salesperson/delete/:id", authMiddleware , makeExpressCallback(softDeleteSalespersonController))

module.exports = router;
