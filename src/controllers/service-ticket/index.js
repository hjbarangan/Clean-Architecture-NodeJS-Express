const {
  createTicketUseCase,
  viewTicketUseCase,
  viewAllTicketsUseCase,
  editTicketUseCase,
  softDeleteTicketUseCase
} = require("../../use-cases/service-ticket/index");

const createTicketController = require("./add-service-ticket.controller");
const fetchTicketDetailsController = require("./get-ticket-details.controller");
const fetchAllTicketsController = require("./get-all-tickets.controller");
const editTicketController = require("./edit-ticket.controller");
const deleteTicketController = require("./soft-delete-ticket.controller");

const postTicketController = createTicketController({ createTicketUseCase });
const getAllTicketsController = fetchAllTicketsController({
  viewAllTicketsUseCase
});
const getTicketByIdController = fetchTicketDetailsController({
  viewTicketUseCase
});
const softDeleteTicketController = deleteTicketController({
  softDeleteTicketUseCase
});

const putTicketController = editTicketController({
  editTicketUseCase
});
const controller = Object.freeze({
  postTicketController,
  getAllTicketsController,
  getTicketByIdController,
  putTicketController,
  softDeleteTicketController
});

module.exports = controller;

module.exports = {
  postTicketController,
  getAllTicketsController,
  getTicketByIdController,
  putTicketController,
  softDeleteTicketController
};
