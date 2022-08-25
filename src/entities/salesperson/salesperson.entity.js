const makeSalespersonEntity = ({}) => {
  return function createSalesperson(salesperson) {
    const { firstname, lastname } = salesperson;

    //conditions
    if (!firstname) {
      throw new Error("Enter Salesperson Firstname");
    }
    if (!lastname) {
      throw new Error("Enter Salesperson Lastname");
    }

    return Object.freeze({
      firstname,
      lastname,
    });
  };
};

module.exports = makeSalespersonEntity;
