const quotationData = ({ dbs }) => {
  return Object.freeze({
    getAllQuotations,
    getQuotationById,
    addQuotation,
    getAllProducts
  });

  async function getAllQuotations() {
    const connect = await dbs();
    const sql = `SELECT
    Q.quotation_id, S.service_id,  SK.sku_id, C.customer_id, SK.cost, QL.qty, QL.amount, SK.unit,
    PP.printname, PP.barcode, PC.serial_number,
    PC.brand_name, PC.model, PC.color, SI.service_name, SI.unit as service_unit, SI.cost as service_cost,
    C.name, C.contact_number, C.address, U.name as user_name ,Q.date_transaction, Q.status
    FROM quotation Q
    INNER JOIN quotation_line QL ON QL.quotation_id = Q.quotation_id
    LEFT OUTER JOIN sku SK ON SK.sku_id = QL.sku_id
    LEFT OUTER JOIN service S ON S.service_id = Q.service_id
    LEFT OUTER JOIN service_line SL ON SL.service_id = S.service_id
    LEFT OUTER JOIN service_item SI ON SI.service_item_id = SL.service_item_id
    LEFT OUTER JOIN product_parts PP ON SK.sku_id = PP.sku_id
    LEFT OUTER JOIN product_car PC ON PC.sku_id = SK.sku_id
    LEFT OUTER JOIN users U ON U.user_id = Q.user_id
    INNER JOIN customer C ON C.customer_id = Q.customer_id ORDER BY quotation_id DESC`;
    return connect.query(sql);
  }

  async function getAllProducts() {
    const connect = await dbs();

    const sql = `SELECT C.product_car_id, C.color,  C.brand_name, C.model, C.serial_number,  
    P.product_parts_id, P.printname, P.barcode, sku.sku_id, 
          sku.unit, sku.cost 
        FROM sku 
        LEFT OUTER JOIN product_car C ON C.sku_id = sku.sku_id 
        LEFT OUTER JOIN product_parts P ON P.sku_id = sku.sku_id 
        WHERE  P.printname IS NOT NULL OR C.sku_id NOT IN
        (SELECT sku_id from quotation_line)
         ORDER BY sku.sku_id DESC;`;

    // const sql = `SELECT C.product_car_id, C.color,  C.brand_name, C.model, C.serial_number,  P.product_parts_id, P.printname, P.barcode, sku.sku_id,
    //   sku.unit, sku.cost FROM sku LEFT OUTER JOIN product_car C ON C.sku_id = sku.sku_id LEFT OUTER JOIN product_parts P ON P.sku_id = sku.sku_id ORDER BY sku.sku_id DESC;`;
    return connect.query(sql);
  }

  async function getQuotationById(id) {
    const connect = await dbs();
    const sql = `SELECT
    Q.quotation_id, S.service_id,  SK.sku_id,  C.customer_id, QL.qty, QL.amount, SK.unit, SK.cost,
    PP.printname, PP.barcode, PC.serial_number,
    PC.brand_name, PC.model, PC.color, 
    C.name, C.contact_number, C.address, Q.date_transaction, Q.status
    FROM quotation Q
    INNER JOIN quotation_line QL ON QL.quotation_id = Q.quotation_id
    LEFT OUTER JOIN sku SK ON SK.sku_id = QL.sku_id
    LEFT OUTER JOIN service S ON S.service_id = Q.service_id
    LEFT OUTER JOIN product_parts PP ON SK.sku_id = PP.sku_id
    LEFT OUTER JOIN product_car PC ON PC.sku_id = SK.sku_id
    INNER JOIN customer C ON C.customer_id = Q.customer_id where Q.quotation_id = $1;`;
    const params = [id];
    return connect.query(sql, params);
  }

  async function addQuotation({ customer_id, user_id, service_id, products }) {
    try {
      const connect = await dbs();

      const sql = `INSERT INTO quotation ( customer_id, user_id, service_id, status, date_transaction) VALUES ( $1,  $2, $3, 'PR (Process)', localtimestamp) RETURNING *;`;
      const getQuotation = await connect.query(sql, [
        customer_id,
        user_id,
        service_id
      ]);

      let quotation_id = getQuotation.rows[0].quotation_id;
      let service_id_check = getQuotation.rows[0].service_id;
      let quotation_date_transaction = getQuotation.rows[0].date_transaction;

      let insertQuotationItemsSQL =
        "INSERT INTO quotation_line (quotation_id, sku_id, qty, amount) VALUES ";
      let values = "";
      let data = [];

      products.forEach((product) => {
        values += `(${quotation_id},${product.sku_id}, ${product.qty}, ${product.amount}),`;
        data.push({
          sku_id: product.sku_id,
          qty: product.qty,
          amount: product.amount
        });
      });
      insertQuotationItemsSQL += values.slice(0, -1);
      insertQuotationItemsSQL += " RETURNING *;";

      const insertQuotationItems = await connect.query(insertQuotationItemsSQL);

      return {
        msg: "Quotation Successfully Added.",
        date_transaction: quotation_date_transaction,
        quotation_id: quotation_id,
        service_id: service_id_check,
        data: insertQuotationItems.rows
      };
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = quotationData;
