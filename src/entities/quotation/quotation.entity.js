const quotationEntity = ({ customer_id, user_id, service_id, products }) => {
  return Object.freeze({
    customer_id,
    user_id,
    service_id,
    products
  });
};

module.exports = quotationEntity;
