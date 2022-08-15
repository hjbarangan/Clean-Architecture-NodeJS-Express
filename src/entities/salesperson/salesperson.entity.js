const makeSalespersonEntity = ({ data }) => {
  //data

  const { firstname, lastname } = data;

  //conditions
  if (!firstname) {
    throw new Error("Enter Salesperson Firstname");
  }
  if (!lastname) {
    throw new Error("Enter Salesperson Lastname");
  }

  return Object.freeze(data);
};

module.exports = makeSalespersonEntity;
