const softDelCustomer = ({ customerDB }) => {
  return async function deleteCustomer(info) {
    const { id } = info;
    const result = await customerDB.softDeleteCustomer(id);
    return { message: "Customer Deleted Successfully", data: result.rows };
  };
};

module.exports = softDelCustomer;
