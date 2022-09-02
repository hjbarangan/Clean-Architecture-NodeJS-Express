require("tls").DEFAULT_MIN_VERSION = "TLSv1";
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
// const path = require("path");
const helmet = require("helmet");

const carRoutes = require("./routes/car.route");
const customerRoutes = require("./routes/customer.route");
const userRoutes = require("./routes/user.route")
const salespersonRoutes = require("./routes/salesperson.route")
const invoiceRoutes = require("./routes/invoice.route")
const dashboardRoutes = require("./routes/dashboard.route")
const ticketRoutes = require("./routes/service-ticket.route")

const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(helmet());

app.use(carRoutes);
app.use(customerRoutes);
app.use(userRoutes);
app.use(salespersonRoutes);
app.use(invoiceRoutes);
app.use(dashboardRoutes);
app.use(ticketRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// module.exports = server;
