const router = require("express").Router();

const {
  postSalespersonController,
  putSalespersonController,
  getSalespersonByIdController,
  getAllSalespersonController,
} = require("../controllers/salesperson/index");

const makeExpressCallback = require("../express-callback/index");

router.post("/salespersons/add", makeExpressCallback(postSalespersonController));
router.put("/salesperson/edit/:id", makeExpressCallback(putSalespersonController));
router.get("/salesperson/:id", makeExpressCallback(getSalespersonByIdController));
router.get("/salesperson", makeExpressCallback(getAllSalespersonController));

module.exports = router;
