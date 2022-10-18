const makeMechanicEntity = ({}) => {
  function containsSpecialChars(string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(string);
  }
  function containsNumbers(string) {
    const numbers = /[0-9]/;
    return numbers.test(string);
  }

  return function createMechanic(mechanic) {
    const { firstname, lastname, contact } = mechanic;

    if (!firstname) {
      throw new Error("Mechanic's firstname is required.");
    }
    if (!lastname) {
      throw new Error("Mechanic's lastname is required.");
    }
    if (!contact) {
      throw new Error("Mechanic's contact number is required.");
    }

    if (containsSpecialChars(firstname) || containsSpecialChars(lastname)) {
      throw new Error("Name should not contain any special character.");
    }

    if (containsNumbers(firstname) || containsNumbers(lastname)) {
      throw new Error("Name should not contain numbers");
    }

    return Object.freeze({
      firstname,
      lastname,
      contact
    });
  };
};

module.exports = makeMechanicEntity;
