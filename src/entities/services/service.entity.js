const makeServiceEntity = ({}) => {
  return function createService({
    customer_id,
    serial_number,
    user_id,
    comment,
    services
  }) {
    // const {  customer_id, serial_number, user_id } = service;

    if (!serial_number) {
      throw new Error("Serial Number is required.");
    }

    if (!customer_id) {
      throw new Error("Customer is required.");
    }

    return Object.freeze({
      customer_id,
      serial_number,
      user_id,
      comment,
      services
    });
  };
};

module.exports = makeServiceEntity;
