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
  async function addQuotation({ customer_id, user_id, service_id, products }) {
    try {
      const connect = await dbs();

      //const { customer_id, user_id, sku_id, qty, cost, amount } = quotation;

      //TODO: INSERT THE USER ID FROM THE LOGGED IN USER TO THE QUOTATION
      const sql = `INSERT INTO quotation ( customer_id, user_id, service_id, status, date_transaction) VALUES ( $1,  $2, $3, 'PR (Process)', localtimestamp) RETURNING *;`;
      const getQuotation = await connect.query(sql, [
        customer_id,
        user_id,
        service_id
      ]);

      let quotation_id = getQuotation.rows[0].quotation_id;
      // insert into quotation (status, date_transaction, user_id, customer_id) values ('Processed', NOW(), 2,1)
      //TODO: FOR LOOP TO INSERT THE ARRAY AND INSERT INTO QUOTATION LINE

      //const addQuotationLineSQL = `INSERT INTO quotation_line (quotation_id, sku_id, qty, cost, amount) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
      // let data = [];
      // for (let i = 0; i < sku_id.length; i++) {
      //   await connect.query(addQuotationLineSQL, [
      //     quotation_id,
      //     sku_id[i],
      //     qty,
      //     cost,
      //     amount
      //   ]);

      //   data.push({
      //     quotation_id: quotation_id,
      //     sku_id: sku_id[i],
      //     qty: qty,
      //     cost: cost,
      //     amount: amount
      //   });
      // }

      //delete products.source;

      // if (products instanceof Array) {
      // The arrayLike value is an array, so it's safe to call forEach() on it.
      //   console.log("ob")
      //   products.forEach(element => console.log(element));
      // } else {
      // The arrayLike value is not an array, so it's not safe to call forEach() on it.
      // You can throw an error or do something else here.
      //   throw new TypeError('The value is not an array.');
      // }

      // // //temporary response
      // return data;

      let insertQuotationItemsSQL =
        "INSERT INTO quotation_line (quotation_id, sku_id, qty, cost) VALUES ";
      let values = "";
      products.forEach((product) => {
        values += `(${quotation_id},${product.sku_id}, ${product.qty}, ${product.cost}),`;
      });
      insertQuotationItemsSQL += values.slice(0, -1);
      insertQuotationItemsSQL += " RETURNING *;";

      return connect.query(insertQuotationItemsSQL, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          //console.log(result);
        }
      });

      //TODO: Get the unit and cost of the sku_id then amount will do the math


      //   // for (let i = 0; i < skuIds.length; i++) {
      //     const insertQuery = `INSERT INTO quotation_line (quotation_id, sku_id) VALUES ${skuIds
      //       .map((skuId) => `(${orderId}, ${skuId})`)
      //       .join(",")};`;
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = quotationData;

//INSERT INTO quotation (status, date_transaction, user_id, customer_id) VALUES ('Y', NOW(), 1, 1)
