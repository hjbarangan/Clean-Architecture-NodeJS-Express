const addService = ({ serviceDB, serviceEntity }) => {
  return async function postService(info) {
    const result = serviceEntity(info);

    const serviceExists = await serviceDB.findByServiceName(result.service_name); 
  
    if (serviceExists.rowCount !== 0) {
      // throw new Error("Service already exists");
      const result = {
        msg: "Service already exists",
        service: serviceExists.rows
      };
      return result;
    }
    
    return serviceDB.addService({
      service_name: result.service_name,
      hourly_rate: result.hourly_rate
    });
  };
};
module.exports = addService;
