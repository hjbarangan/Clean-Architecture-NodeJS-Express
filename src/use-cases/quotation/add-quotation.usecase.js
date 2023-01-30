const addQuotation = ({ quotationDB, quotationEntity }) => {
  return async function postQuotation(info) {
    const result = quotationEntity(info);

    return quotationDB.addQuotation({
      customer_id: result.customer_id,
      user_id: result.user_id,
      service_id: result.service_id,
      products: result.products
    });
    //console.log("result-usecase", data);

    // return ({
    //   msg: "Quotation is successfully created!",
    //   quotation_id: data.rows[0].quotation_id,
    //   serial_number: data.rows[0].serial_number,
    //   service: data.rows[0].service_name,
    //   data: data.rows
    // });
  };
};
module.exports = addQuotation;
