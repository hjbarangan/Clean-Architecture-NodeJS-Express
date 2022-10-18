const ticketDB = require("../../data-access/service-tickets/index");
const ticketEntity = require("../../entities/service-ticket/index");

const createTicket = require("./add-ticket.usecase");
const viewTicket = require("./view-ticket.usecase");
const viewAllTickets = require("./view-all-tickets.usecase");
const softDelTicket = require("./delete-ticket.usecase");
const editTicket = require("./edit-ticket.usecase");

const createTicketUseCase = createTicket({ ticketDB, ticketEntity });
const viewTicketUseCase = viewTicket({ ticketDB, ticketEntity });
const viewAllTicketsUseCase = viewAllTickets({
  ticketDB,
  ticketEntity
});
const editTicketUseCase = editTicket({ ticketDB, ticketEntity });
const softDeleteTicketUseCase = softDelTicket({ ticketDB });

const ticketServices = Object.freeze({
  createTicketUseCase,
  viewTicketUseCase,
  viewAllTicketsUseCase,
  softDeleteTicketUseCase,
  editTicketUseCase
});

module.exports = ticketServices;

module.exports = {
  createTicketUseCase,
  viewTicketUseCase,
  viewAllTicketsUseCase,
  softDeleteTicketUseCase,
  editTicketUseCase
};
