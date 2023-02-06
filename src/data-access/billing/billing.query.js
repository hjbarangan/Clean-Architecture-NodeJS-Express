const billingData = ({ dbs }) => {
  return Object.freeze({
    getAllBillings,
    getBillingById,
    addBilling,
    getAllProducts
  });

  async function getAllBillings() {
    try {
      const connect = await dbs();
      const sql = `SELECT * FROM billing ORDER BY billing_id DESC`;
      return connect.query(sql);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllProducts() {
    try {
      const connect = await dbs();
      const sql = `SELECT C.product_car_id, C.color,  C.brand_name, C.model, C.serial_number,  P.product_parts_id, P.printname, P.barcode, sku.sku_id, 
      sku.unit, sku.cost FROM sku LEFT OUTER JOIN product_car C ON C.sku_id = sku.sku_id LEFT OUTER JOIN product_parts P ON P.sku_id = sku.sku_id ORDER BY sku.sku_id DESC;`;
      return connect.query(sql);
    } catch (error) {
      console.log(error);
    }
  }

  async function getBillingById(id) {
    try {
      const connect = await dbs();
      const sql = `SELECT
      Q.billing_id, QL.qty, QL.amount, SK.unit, SK.cost,
      PP.printname, PP.barcode, PC.serial_number,
      PC.brand_name, PC.model, PC.color, SI.service_name, SI.unit as service_unit, SI.cost as service_cost,
      C.name, C.contact_number, C.address, Q.date_transaction, Q.status
      FROM billing Q
      INNER JOIN billing_line QL ON QL.billing_id = Q.billing_id
      LEFT OUTER JOIN sku SK ON SK.sku_id = QL.sku_id
      LEFT OUTER JOIN service S ON S.service_id = Q.service_id
      LEFT OUTER JOIN service_line SL ON SL.service_id =  S.service_id
      LEFT OUTER JOIN service_item SI ON SI.service_item_id = SL.service_item_id
      LEFT OUTER JOIN product_parts PP ON SK.sku_id = PP.sku_id
      LEFT OUTER JOIN product_car PC ON PC.sku_id = SK.sku_id
      INNER JOIN customer C ON C.customer_id = Q.customer_id where Q.billing_id = $1;`;
      const params = [id];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function addBilling(billing) {
    try {
      const connect = await dbs();
      const { customer_id, user_id, service_id, quotation_id } = billing;
      const sql = `INSERT INTO billing ( customer_id, user_id, service_id, quotation_id, status, date_transaction) VALUES ( $1,  $2, $3, $4, 'PR (Process)', localtimestamp) RETURNING *;`;
      const billingQuery = await connect.query(sql, [
        customer_id,
        user_id,
        service_id,
        quotation_id
      ]);
      return billingQuery;
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = billingData;
