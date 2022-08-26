const dashboardData = ({ dbs }) => {
    return Object.freeze({
      getMonthlyNumberOfSales,
      getMonthlyRevenue, 
      getMonthlyCustomers,
      getTopSellingBrands
    });
  
    async function getMonthlyNumberOfSales() {
      const connect = await dbs();
      const sql = "SELECT COUNT(invoice_id) FROM sales_invoice WHERE transaction_date >= DATE_TRUNC('month', CURRENT_DATE)";
      return connect.query(sql);
    }
  
    async function getMonthlyRevenue() {
      const connect = await dbs();
      const sql = "SELECT SUM(amount) FROM sales_invoice WHERE transaction_date >= DATE_TRUNC('month', CURRENT_DATE)";
      return connect.query(sql);
    }
  
  
    async function getMonthlyCustomers() {
        const connect = await dbs();
        const sql = "SELECT COUNT(customer_id) FROM customers WHERE created_date >= DATE_TRUNC('month', CURRENT_DATE)";
        return connect.query(sql);
      }

    async function getTopSellingBrands() {
        const connect = await dbs();
        const sql = "SELECT brand, sum(amount) as BrandSales, count(car_id) from sales_invoice  GROUP BY brand ORDER by BrandSales desc limit 10;";
        return connect.query(sql, params);
    }
  
  };
  
  module.exports = dashboardData;
  