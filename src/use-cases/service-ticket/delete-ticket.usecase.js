const softDelTicket = ({ ticketDB }) => {
    return async function deleteTicket(info) {
      const { id } = info;
  
      const result = await ticketDB.softDeleteTicket(id);
      return result.rows;
    };
  };
  
  module.exports = softDelTicket;
  