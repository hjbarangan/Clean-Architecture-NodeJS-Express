
const makeDb = require("../../config/db.config");
const db = require("./service-ticket.query");

const ticketDB = makeDb ({ db });

module.exports = ticketDB;
