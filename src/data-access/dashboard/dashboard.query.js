const dashboardData = ({ dbs }) => {
  return Object.freeze({
    getMonthlyNumberOfSales,
    getMonthlyRevenue,
    getMonthlyCustomers,
    getTopSellingBrands,
  });

  async function getMonthlyNumberOfSales() {
    const connect = await dbs();
    const sql =
      "SELECT COUNT(invoice_id) FROM sales_invoice WHERE transaction_date >= DATE_TRUNC('month', CURRENT_DATE)";
    return connect.query(sql);
  }

  //DONE: GET SUM FROM JOINED TABLES
  async function getMonthlyRevenue() {
    const connect = await dbs();
    const sql =
      "SELECT SUM(C.price) as month_revenue FROM sales_invoice S INNER JOIN cars C on S.car_id = C.car_id WHERE transaction_date  >= DATE_TRUNC('month', CURRENT_DATE);";
    return connect.query(sql);
  }

  //DONE: CHANGE THE DATA TYPE
  async function getMonthlyCustomers() {
    const connect = await dbs();
    const sql =
      "SELECT COUNT(customer_id) FROM customers WHERE created_at >= DATE_TRUNC('month', CURRENT_DATE)";
    return connect.query(sql);
  }

  //?: SHOULD RETURN FROM JOINED TABLES
  async function getTopSellingBrands() {
    const connect = await dbs();
    const sql =
      "SELECT C.brand as carBrand, SUM(C.price) as BrandSales, COUNT(C.car_id) FROM sales_invoice S INNER JOIN cars C on S.car_id = C.car_id" +" "+
      "GROUP BY C.brand ORDER by BrandSales DESC LIMIT 10";
    return connect.query(sql);
  }
};

module.exports = dashboardData;
