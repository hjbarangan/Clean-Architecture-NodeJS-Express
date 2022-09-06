const makeSalespersonEntity = ({}) => {

  function containsSpecialChars(string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(string);
  }
  function containsNumbers (string) {
    const numbers = /[0-9]/
    return numbers.test(string)
  }

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

    if (containsSpecialChars(firstname) || containsSpecialChars(lastname)) {
      throw new Error("Name should not contain any special character");
    }

    if (containsNumbers(firstname) || containsNumbers(lastname)) {
      throw new Error("Name should not contain numbers!")
    }
    
    return Object.freeze({
      firstname,
      lastname,
      contact
    });
  };
};

module.exports = makeSalespersonEntity;
