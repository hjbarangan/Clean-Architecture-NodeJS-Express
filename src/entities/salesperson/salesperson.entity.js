const salespersonEntity = (salesperson) => {
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
    contact
  });
};

module.exports = salespersonEntity;
