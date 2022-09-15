const makeSalespersonEntity = ({}) => {
  function containsSpecialChars(string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(string);
  }
  function containsNumbers(string) {
    const numbers = /[0-9]/;
    return numbers.test(string);
  }

  return function createSalesperson(salesperson) {
    const { firstname, lastname, contact } = salesperson;

    if (!firstname) {
      throw new Error("Salesperson's firstname is required.");
    }
    if (!lastname) {
      throw new Error("Salesperson's lastname is required.");
    }
    if (!contact) {
      throw new Error("Salesperson's contact number is required.");
    }

    if (containsSpecialChars(firstname) || containsSpecialChars(lastname)) {
      throw new Error("Name should not contain any special character.");
    }

    if (containsNumbers(firstname) || containsNumbers(lastname)) {
      throw new Error("Name should not contain any numbers.");
    }

    return Object.freeze({
      firstname,
      lastname,
      contact,
    });
  };
};

module.exports = makeSalespersonEntity;
