const softDelTicket = ({ ticketDB }) => {
    return async function deleteTicket(info) {
      const { id } = info;
  
      const result = await ticketDB.softDeleteTicket(id);
      return { message: "Service Ticket Deleted Successfully", data: result.rows };
    };
  };
  
  module.exports = softDelTicket;
  