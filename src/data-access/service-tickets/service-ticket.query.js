const ticketData = ({ dbs }) => {
  return Object.freeze({
    getAllTickets,
    getTicketById,
    createTicket,
    findByTicketNumber
  })

  async function getAllTickets() {
    const connect = await dbs()
    // const sql = "SELECT * FROM service_ticket ORDER BY service_ticket_id DESC"
    const sql = "SELECT T.service_ticket_id, T.service_ticket_number, T.date_returned, T.date_received, T.comments, CONCAT(C.firstname, ' ', C.lastname) AS customer_name, CONCAT(M.firstname, ' ', M.lastname) AS mechanic_name,  A.serial_number, A.brand, A.model FROM service_ticket T" +
    " INNER JOIN customers C ON T.customer_id = C.customer_id INNER JOIN cars A ON T.car_id = A.car_id INNER JOIN mechanics M ON T.mechanic_id = M.mechanic_id INNER JOIN services S ON S.service_id = T.service_id ORDER BY t.service_ticket_id DESC;";
    return connect.query(sql)
  }

  async function getTicketById(id) {
    const connect = await dbs()
    const sql = "SELECT * FROM service_ticket WHERE service_ticket_id = $1"
    const params = [id]
    return connect.query(sql, params)
  }

  async function createTicket(service_ticket) {
    const connect = await dbs()
    const {
      date_received,
      comments,
      date_returned,
      car_id,
      customer_id,
      mechanic_id,
      service_id
    } = service_ticket

    const getLastTicketSQL =
      "SELECT MAX(service_ticket_id) FROM service_ticket;"

    const lastTicket = await connect.query(getLastTicketSQL)
    let getLastTicketSQLIncrement = lastTicket.rows[0].max + 1

    const addLeadingZeros = String(getLastTicketSQLIncrement).padStart(5, "0")
    const generatedTicketNo = `Ticket-${addLeadingZeros}`
    const params = [
      generatedTicketNo,
      date_received,
      comments,
      date_returned,
      car_id,
      customer_id,
      mechanic_id,
      service_id
    ]

    const sql =
      "INSERT INTO service_ticket (service_ticket_number, date_received, comments, date_returned, car_id, customer_id, mechanic_id, service_id, created_at, updated_at, is_active) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, localtimestamp, localtimestamp, true) RETURNING *;"

    //insert here the joined tables

    return connect.query(sql, params)

    // const ticketTransactionSQL =
    //   "SELECT t.service_ticket_number, t.date_received, t.date_returned, t.comments, c.serial_number, c.brand, c.model FROM sales_invoice s JOIN cars c ON c.car_id = s.car_id WHERE s.invoice_number = $1"
    // const ticketTransactionParams = [generatedTicketNo]

    // const viewTransaction = await connect.query(
    //   ticketTransactionSQL,
    //   ticketTransactionParams
    // )
    // return viewTransaction.rows
  }

  async function findByTicketNumber(service_ticket_number) {
    const connect = await dbs()
    const sql = "SELECT * FROM service_ticket WHERE service_ticket_number = $1"
    const params = [service_ticket_number]
    return connect.query(sql, params)
  }
}

module.exports = ticketData
