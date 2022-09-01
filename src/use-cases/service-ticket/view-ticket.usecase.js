const viewTicket = ({ ticketDB }) => {
    return async function viewTicket(info) {
      const { id } = info;
  
      const result = await ticketDB.getTicketById(id);
      return result.rows;
    };
  };
  
  module.exports = viewTicket;
  