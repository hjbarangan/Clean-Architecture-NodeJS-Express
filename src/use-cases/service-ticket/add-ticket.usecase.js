const createTicket = ({ ticketDB, ticketEntity }) => {
    return async function postTicket(info) {
      const result = ticketEntity(info);
      const ticketExists = await ticketDB.findByTicketNumber(result.ticket_number);
  
      if (ticketExists.rowCount !== 0) {
        const result = {
          msg: "Ticket Number already exists",
          car: ticketExists.rows,
        };
        return result;
      }
  
      return ticketDB.createTicket({
        ticket_number: result.service_ticket_number,
        car_id: result.car_id,
        customer_id: result.customer_id,
        salesperson_id: result.salesperson_id
      });
    };
  };
  module.exports = createTicket;
  
  
  