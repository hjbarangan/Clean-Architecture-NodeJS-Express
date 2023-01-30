const addService = ({ serviceDB, serviceEntity }) => {
  return async function postService(info) {
    const result = serviceEntity(info);

    return serviceDB.addService({
      customer_id: result.customer_id,
      serial_number: result.serial_number,
      user_id: result.user_id,
      comment: result.comment,
      services: result.services
    });
  };
};
module.exports = addService;
