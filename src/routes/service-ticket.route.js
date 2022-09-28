const router = require("express").Router();

const {
  postTicketController,
  getTicketByIdController,
  getAllTicketsController,
  softDeleteTicketController,
  putTicketController
} = require("../controllers/service-ticket/index");
const authMiddleware = require("../middleware/index");
const makeExpressCallback = require("../express-callback/index");

router.post(
  "/ticket/create",
  makeExpressCallback(postTicketController)
);
router.get(
  "/ticket/view/:id",
  makeExpressCallback(getTicketByIdController)
);
router.get("/ticket", makeExpressCallback(getAllTicketsController));

//TODO: EDIT AND DELETE TICKET
router.put(
  "/ticket/edit/:id",
  makeExpressCallback(putTicketController)
);

router.patch(
  "/ticket/delete/:id",
  makeExpressCallback(softDeleteTicketController)
);
module.exports = router;
