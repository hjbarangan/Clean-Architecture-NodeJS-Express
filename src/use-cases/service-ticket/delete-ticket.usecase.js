const softDelTicket = ({ ticketDB }) => {
    return async function deleteTicket(info) {
      const { id } = info;
  
      const result = await ticketDB.softDeleteMechanic(id);
      return result.rows;
    };
  };
  
  module.exports = softDelTicket;
  