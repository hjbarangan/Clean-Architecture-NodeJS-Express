const softDelService = ({ serviceDB }) => {
  return async function deleteService(info) {
    const { id } = info;

    const result = await serviceDB.softDeleteService(id);
    return { message: "Service Deleted Successfully", data: result.rows };
  };
};

module.exports = softDelService;
