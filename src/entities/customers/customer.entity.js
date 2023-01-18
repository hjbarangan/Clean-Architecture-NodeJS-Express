const makeCustomerEntity = ({}) => {
  // function containsSpecialChars(string) {
  //   const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  //   return specialChars.test(string);
  // }

  // function containsNumbers(string) {
  //   const numbers = /[0-9]/;
  //   return numbers.test(string);
  // }

  return function createCustomer(customer) {
    const { name, contact_number, address } = customer;

    if (!name) {
      throw new Error("Customer's name is required.");
    }

    if (!contact_number) {
      throw new Error("Customer's contact number is required.");
    }

    if (!address) {
      throw new Error("Customer's address is required.");
    }

    // if (containsSpecialChars(name)) {
    //   throw new Error("Name should not contain any special character.");
    // }

    // if (containsNumbers(name)) {
    //   throw new Error("Name should not contain any numbers.");
    // }

    return Object.freeze({
      name,
      contact_number,
      address
    });
  };
};

module.exports = makeCustomerEntity;
