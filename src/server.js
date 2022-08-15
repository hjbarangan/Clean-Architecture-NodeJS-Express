const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");

const carRoutes = require("./routes/car.route");

const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use(carRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// module.exports = server;
