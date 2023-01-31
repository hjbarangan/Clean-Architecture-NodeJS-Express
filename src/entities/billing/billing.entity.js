const makeBillingEntity = ({}) => {
  return function createBilling({
    customer_id,
    user_id,
    quotation_id,
    service_id
  }) {

    if (!service_id && !quotation_id ){
      throw new Error ("Select Service or Quotation!")
    }

    return Object.freeze({
      customer_id,
      user_id,
      service_id,
      quotation_id
    });
  };
};

module.exports = makeBillingEntity;
