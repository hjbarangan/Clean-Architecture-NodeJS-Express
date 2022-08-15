const salespersonEntity = () => {
  //data

  //conditions
  if (!firstname) {
    throw new Error("Enter Salesperson Firstname");
  }
  if (!lastname) {
    throw new Error("Enter Salesperson Lastname");
  }

  return Object.freeze({
    salesperson_firstname: firstname,
    salesperson_lastname: lastname,
  });
};

module.exports = salespersonEntity;
