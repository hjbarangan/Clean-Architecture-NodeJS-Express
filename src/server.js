require("tls").DEFAULT_MIN_VERSION = "TLSv1";
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");
const helmet = require("helmet");
const fs = require("fs");

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

app.get("/api", (req, res) => {
  res.send("Car dealership API");
});

app.use("/api", require("./routes/car.route"));
app.use("/api", require("./routes/customer.route"));
app.use("/api", require("./routes/user.route"));
app.use("/api", require("./routes/user_role.route"));
app.use("/api", require("./routes/sku.route"));
app.use("/api", require("./routes/service.route"));
app.use("/api", require("./routes/car.route"));
app.use("/api", require("./routes/parts.route"));
app.use("/api", require("./routes/quotation.route"));
app.use("/api", require("./routes/billing.route"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
