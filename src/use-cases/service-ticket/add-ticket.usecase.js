const createTicket = ({ ticketDB, ticketEntity }) => {
  return async function postTicket(info) {
    const result = ticketEntity(info);
    // const ticketExists = await ticketDB.findByTicketNumber(
    //   result.ticket_number
    // );

    // if (ticketExists.rowCount !== 0) {
    //   const result = {
    //     msg: "Ticket Number already exists",
    //     car: ticketExists.rows,
    //   };
    //   return result;
    // }

    return ticketDB.createTicket({
      ticket_number: result.service_ticket_number,
      date_received: result.date_received,
      comments: result.comments,
      date_returned: result.date_returned,
      car_id: result.car_id,
      customer_id: result.customer_id,
      mechanic_id: result.mechanic_id,
      created_at: result.created_at,
      updated_at: result.updated_at,
    });
  };
};
module.exports = createTicket;
