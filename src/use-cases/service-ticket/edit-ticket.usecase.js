const editTicket = ({ ticketDB, ticketEntity }) => {
    return async function putTicket({ id, ...mechanicInfo }) {
      const result = ticketEntity(mechanicInfo);
  
      return ticketDB.editTicket({
        id: id,
        ticket_number: result.service_ticket_number,
        date_received: result.date_received,
        comments: result.comments,
        date_returned: result.date_returned,
        car_id: result.car_id,
        customer_id: result.customer_id,
        mechanic_id: result.mechanic_id,
        service_id: result.service_id,
        created_at: result.created_at,
        updated_at: result.updated_at,
 
      });
    };
  };
  module.exports = editTicket;
  