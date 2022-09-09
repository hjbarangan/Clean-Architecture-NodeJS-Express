const ticketData = ({ dbs }) => {
  return Object.freeze({
    getAllTickets,
    getTicketById,
    createTicket,
    findByTicketNumber,
  });

  async function getAllTickets() {
    const connect = await dbs();
    const sql = "SELECT * FROM service_ticket ORDER BY service_ticket_id DESC";
    return connect.query(sql);
  }

  async function getTicketById(id) {
    const connect = await dbs();
    const sql = "SELECT * FROM service_ticket WHERE service_ticket_id = $1";
    const params = [id];
    return connect.query(sql, params);
  }

  async function createTicket(service_ticket) {
    const connect = await dbs();
    const {
      date_received,
      comments,
      date_returned,
      car_id,
      customer_id,
      created_at,
      updated_at,
      is_active,
    } = service_ticket;

    const getLastTicketSQL = "SELECT MAX(ticket_id) FROM service_ticket;";
    const lastTicket = await connect.query(getLastTicketSQL);
    const addLeadingZeros = String(lastTicket.rows[0].max).padStart(5, "0");
    const generatedTicketNo = `Ticket-${addLeadingZeros}`;

    const params = [
      generatedTicketNo,
      date_received,
      comments,
      date_returned,
      car_id,
      customer_id,
      created_at,
      updated_at,
      is_active,
    ];

    const sql =
      "INSERT INTO service_ticket (service_ticket_number, date_received, comments, date_returned, car_id, customer_id, created_at, updated_at, is_active) VALUES ( $1, $2, $3, $4, $5, $6, localtimestamp, localtimestamp, true) RETURNING *;";
    return connect.query(sql, params);
  }

  async function findByTicketNumber(service_ticket_number) {
    const connect = await dbs();
    const sql = "SELECT * FROM service_ticket WHERE service_ticket_number = $1";
    const params = [service_ticket_number];
    return connect.query(sql, params);
  }
};

module.exports = ticketData;
