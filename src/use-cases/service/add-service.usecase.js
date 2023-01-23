const addService = ({ serviceDB, serviceEntity }) => {
  return async function postService(info) {
    const result = serviceEntity(info);

    
    return serviceDB.addService({
      user_id: result.user_id,
      customer_id: result.customer_id,
      serial_number: result.serial_number,
      user_id: result.user_id
    });
  };
};
module.exports = addService;
