const carRoutes = require("./car.route")
const customerRoutes = require("./customer.route")
const userRoleRoutes = require("./user_role.route")
const userRoutes = require("./user.route")

app.use("/api", carRoutes);
app.use("/api", customerRoutes);
app.use("/api", userRoutes);
app.use("/api", salespersonRoutes);
app.use("/api", invoiceRoutes);
app.use("/api", dashboardRoutes);
app.use("/api", ticketRoutes);
app.use("/api", mechanicRoutes);
app.use("/api", serviceRoutes);
app.use("/api", partRoutes);
app.use("/api", userRoleRoutes);