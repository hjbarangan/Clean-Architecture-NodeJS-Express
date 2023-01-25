const quotationData = ({ dbs }) => {
  return Object.freeze({
    getAllQuotations,
    getQuotationById,
    addQuotation,
    getAllProducts
    // addQuotationLine,
    // editQuotationLine,
    // softDeleteQuotationLine,
    // findByQuotationLineName,
    // getAllQuotationLines
  });

  async function getAllQuotations() {
    const connect = await dbs();
    const sql = "SELECT * FROM quotation ORDER BY quotation_id DESC";
    return connect.query(sql);
  }

  async function getAllProducts() {
    const connect = await dbs();
    const sql =
      "SELECT C.product_car_id, C.color,  C.brand_name, C.model, C.serial_number,  P.product_parts_id, P.printname, P.barcode, sku.sku_id, sku.unit, sku.cost FROM sku LEFT OUTER JOIN product_car C ON C.sku_id = sku.sku_id LEFT OUTER JOIN product_parts P ON P.sku_id = sku.sku_id ORDER BY sku.sku_id DESC;";
    return connect.query(sql);
  }

  async function getQuotationById(id) {
    const connect = await dbs();
    const sql = "SELECT * FROM quotation WHERE quotation_id = $1";
    const params = [id];
    return connect.query(sql, params);
  }

  //! HIGH PRIORITY TASK
  async function addQuotation({ customer_id, serial_number }) {
    try {
      const connect = await dbs();

      //TODO: INSERT THE USER ID FROM THE LOGGED IN USER TO THE QUOTATION
      // const sql = `INSERT INTO quotation ( customer_id, serial_number, status, date_transaction) VALUES ( $1, $2, 'PR (Process)', localtimestamp) RETURNING *;`;
      // await connect.query(sql, [customer_id, serial_number]);

      //TODO: INSERT INTO QUOTATION LINE
      // const addQuotationLineSQL = `INSERT INTO quotation_line (quotation_id, sku_id, )`;

      //TODO: FOR LOOP TO INSERT THE ARRAY
      // for (let i = 0; i < sku_id.length; i++) {
      //   return connect.query(addQuotationLineSQL, [sku_id[i]]);
      // }

      const skuIds = [1, 2, 3];
      const orderId = 1;
      const insertQuery = `INSERT INTO quotation_line (quotation_id, sku_id) VALUES ${skuIds
        .map((skuId) => `(${orderId}, ${skuId})`)
        .join(",")};`;
      connect.query(insertQuery, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log("SKU IDs inserted into Order table");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
};


module.exports = quotationData;

//INSERT INTO quotation (status, date_transaction, user_id, customer_id) VALUES ('Y', NOW(), 1, 1)