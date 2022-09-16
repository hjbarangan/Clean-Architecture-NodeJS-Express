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

router.post("/salesperson/add", makeExpressCallback(postSalespersonController));
router.put("/salesperson/edit/:id",  makeExpressCallback(putSalespersonController));
router.get("/salesperson/view/:id", makeExpressCallback(getSalespersonByIdController));
router.get("/salesperson", makeExpressCallback(getAllSalespersonController));
router.patch("/salesperson/delete/:id", makeExpressCallback(softDeleteSalespersonController))

module.exports = router;
