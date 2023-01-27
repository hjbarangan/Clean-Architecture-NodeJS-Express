const addService = ({ serviceDB, serviceEntity }) => {
  return async function postService(info) {
    const result = serviceEntity(info);

    const data = await serviceDB.addService({
      customer_id: result.customer_id,
      serial_number: result.serial_number,
      user_id: result.user_id,
      services: result.services
    });

    return data;
  };
};
module.exports = addService;
