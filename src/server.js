require("tls").DEFAULT_MIN_VERSION = "TLSv1";
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");
const helmet = require("helmet");
const fs = require("fs");
const routes = require("./routes/index")
// const carRoutes = require("./routes/car.route");
// const customerRoutes = require("./routes/customer.route");
// const userRoutes = require("./routes/user.route");
// const salespersonRoutes = require("./routes/salesperson.route");
// const invoiceRoutes = require("./routes/invoice.route");
// const dashboardRoutes = require("./routes/dashboard.route");
// const ticketRoutes = require("./routes/service-ticket.route");
// const mechanicRoutes = require("./routes/mechanic.route");
// const serviceRoutes = require("./routes/service.route");
// const partRoutes = require("./routes/parts.route")
// const userRoleRoutes = require("./routes/user_role.route")

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a"
  }
);

const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  logger(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer"',
    { stream: accessLogStream }
  )
);
//logs for console
app.use(logger("dev"));
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use("/api/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("api", routes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
