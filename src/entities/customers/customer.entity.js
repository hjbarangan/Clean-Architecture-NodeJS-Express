const makeCustomerEntity = ({}) => {
  function containsSpecialChars(string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(string);
  }

  function containsNumbers(string) {
    const numbers = /[0-9]/;
    return numbers.test(string);
  }

  return function createCustomer(customer) {
    const { firstname, lastname, contact, address } = customer;

    if (!firstname) {
      throw new Error("Customer's firstname is required.");
    }

    if (!lastname) {
      throw new Error("Customer's lastname is required.");
    }

    if (!contact) {
      throw new Error("Customer's contact number is required.");
    }

    if (!address) {
      throw new Error("Customer's address is required.");
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
      address,
    });
  };
};

module.exports = makeCustomerEntity;
