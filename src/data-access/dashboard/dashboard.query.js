const dashboardData = ({ dbs }) => {
  return Object.freeze({
    getMonthlyNumberOfSales,
    getMonthlyRevenue,
    getMonthlyCustomers,
    getTopSellingBrands
  });

  async function getMonthlyNumberOfSales() {
    const connect = await dbs();
    const sql = `SELECT SUM(QL.amount) as quotation_daily_sales, SUM(SL.amount) as service_daily_sales FROM billing B 
    LEFT OUTER JOIN quotation Q on Q.quotation_id = B.quotation_id 
    LEFT OUTER JOIN quotation_line QL on QL.quotation_id = Q.quotation_id 
    LEFT OUTER JOIN service S on S.service_id = B.service_id 
    LEFT OUTER JOIN service_line SL on SL.service_id = S.service_id 
    WHERE B.date_transaction  = CURRENT_DATE;`;
    const dailyRevenue = await connect.query(sql);

    const serviceSales = parseInt(dailyRevenue.rows[0].service_daily_sales);
    const quotationSales = parseInt(dailyRevenue.rows[0].quotation_daily_sales);

    const totalSales = serviceSales + quotationSales;

    return {
      monthly_total: totalSales,
      data: dailyRevenue
    };
  }

  async function getMonthlyRevenue() {
    const connect = await dbs();
    const sql = `SELECT SUM(QL.amount) as quotation_monthly_sales, SUM(SL.amount) as service_monthly_sales FROM billing B 
     LEFT OUTER JOIN quotation Q on Q.quotation_id = B.quotation_id 
     LEFT OUTER JOIN quotation_line QL on QL.quotation_id = Q.quotation_id 
     LEFT OUTER JOIN service S on S.service_id = B.service_id 
     LEFT OUTER JOIN service_line SL on SL.service_id = S.service_id 
     WHERE B.date_transaction  >= DATE_TRUNC('month', CURRENT_DATE);`;
    const monthlyRevenue = await connect.query(sql);

    const serviceSales = parseInt(monthlyRevenue.rows[0].service_monthly_sales);
    const quotationSales = parseInt(
      monthlyRevenue.rows[0].quotation_monthly_sales
    );

    const totalSales = serviceSales + quotationSales;

    return {
      monthly_total: totalSales,
      data: monthlyRevenue
    };
  }

  async function getMonthlyCustomers() {
    const connect = await dbs();
    const sql = `SELECT SUM(QL.amount) as quotation_weekly_sales, SUM(SL.amount) as service_weekly_sales FROM billing B 
        LEFT OUTER JOIN quotation Q on Q.quotation_id = B.quotation_id 
        LEFT OUTER JOIN quotation_line QL on QL.quotation_id = Q.quotation_id 
        LEFT OUTER JOIN service S on S.service_id = B.service_id 
        LEFT OUTER JOIN service_line SL on SL.service_id = S.service_id 
        WHERE B.date_transaction  >= DATE_TRUNC('week', CURRENT_DATE);`;
    const weeklyRevenue = await connect.query(sql);

    const serviceSales = parseInt(weeklyRevenue.rows[0].service_weekly_sales);
    const quotationSales = parseInt(
      weeklyRevenue.rows[0].quotation_weekly_sales
    );

    const totalSales = serviceSales + quotationSales;

    return {
      monthly_total: totalSales,
      data: weeklyRevenue
    };
  }

  //?: SHOULD RETURN FROM JOINED TABLES
  async function getTopSellingBrands() {
    const connect = await dbs();
    const sql =
      "SELECT C.brand as carBrand, SUM(C.price) as BrandSales, COUNT(C.car_id) FROM sales_invoice S INNER JOIN cars C on S.car_id = C.car_id" +
      " " +
      "GROUP BY C.brand ORDER by BrandSales DESC LIMIT 10";
    return connect.query(sql);
  }
};

module.exports = dashboardData;
