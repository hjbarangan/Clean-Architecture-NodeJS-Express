const serviceEntity = ({
  customer_id,
  serial_number,
  user_id,
  comment,
  services
}) => {
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

module.exports = serviceEntity;
