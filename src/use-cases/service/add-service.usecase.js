const addService = ({ serviceDB, serviceEntity }) => {
  return async function postService(info) {
    const result = serviceEntity(info);

    const data = await serviceDB.addService({
      customer_id: result.customer_id,
      serial_number: result.serial_number,
      user_id: result.user_id,
      comment: result.comment,
      services: result.services
    });

    return {
      msg: "Service Ticket Successfully Added.",
      data: data.rows
    }
  };
};
module.exports = addService;
