const makeSalespersonEntity = ({}) => {
  return function createSalesperson(salesperson) {
    const { firstname, lastname, contact} = salesperson;

    if (!firstname) {
      throw new Error("Enter Salesperson Firstname");
    }
    if (!lastname) {
      throw new Error("Enter Salesperson Lastname");
    }
    if(!contact) {
      throw new Error("Enter Salesperson Contact");
    }

    return Object.freeze({
      firstname,
      lastname,
      contact
    });
  };
};

module.exports = makeSalespersonEntity;
