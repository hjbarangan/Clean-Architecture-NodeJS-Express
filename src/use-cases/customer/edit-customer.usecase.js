const editCustomer = ({ customerDB, customerEntity }) => {
  return async function putCustomer({ id, ...info }) {
    const result = customerEntity(info);
    try {
      const data = await customerDB.editCustomer({
        id: id,
        name: result.name,
        address: result.address,
        contact_number: result.contact_number,
        date_created: result.date_created
      });

      return {
        msg: "Successfully updated.",
        data: data.rows
      };
    } catch (error) {
      console.log("Error:", error);
    }
  };
};
module.exports = editCustomer;
0