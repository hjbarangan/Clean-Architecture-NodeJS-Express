const {
  createTicketUseCase,
  viewTicketUseCase,
  viewAllTicketsUseCase,
} = require("../../use-cases/service-ticket/index");

const createTicketController = require("./add-service-ticket.controller");
const fetchTicketDetailsController = require("./get-ticket-details.controller");
const fetchAllTicketsController = require("./get-all-tickets.controller");

const postTicketController = createTicketController({ createTicketUseCase });
const getAllTicketsController = fetchAllTicketsController({
  viewAllTicketsUseCase,
});
const getTicketByIdController = fetchTicketDetailsController({
  viewTicketUseCase,
});

const controller = Object.freeze({
  postTicketController,
  getAllTicketsController,
  getTicketByIdController,
});

module.exports = controller;

module.exports = {
  postTicketController,
  getAllTicketsController,
  getTicketByIdController,
};
