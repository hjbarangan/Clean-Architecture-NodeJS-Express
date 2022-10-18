const viewAllTickets = ({ ticketDB }) => {
  return async function viewTickets() {
    const result = await ticketDB.getAllTickets();
    return result.rows;
  };
};

module.exports = viewAllTickets;
