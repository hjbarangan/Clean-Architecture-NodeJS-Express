const makeBillingEntity = ({}) => {
  return function createBilling({ customer_id, user_id, service_id, products }) {
    return Object.freeze({
      customer_id,
      user_id,
      service_id,
      products
    });
  };
};

module.exports = makeBillingEntity;
