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
  "/ticket/create", authMiddleware,
  makeExpressCallback(postTicketController)
);
router.get(
  "/ticket/view/:id", authMiddleware,
  makeExpressCallback(getTicketByIdController)
);
router.get("/ticket", authMiddleware, makeExpressCallback(getAllTicketsController));

//TODO: EDIT AND DELETE TICKET
router.put(
  "/ticket/edit/:id", authMiddleware, 
  makeExpressCallback(putTicketController)
);

router.patch(
  "/ticket/delete/:id", authMiddleware,
  makeExpressCallback(softDeleteTicketController)
);
module.exports = router;
