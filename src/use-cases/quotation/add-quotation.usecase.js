const addQuotation = ({ quotationDB, quotationEntity }) => {
  return async function postQuotation(info) {
    const result = quotationEntity(info);

    let data = await quotationDB.addQuotation({
      customer_id: result.customer_id,
      user_id: result.user_id,
      service_id: result.service_id,
      products: result.products
    });
    //console.log("result-usecase", data);

    return {
      msg: "Quotation is successfully created!",
      data: data
    };
  };
};
module.exports = addQuotation;
