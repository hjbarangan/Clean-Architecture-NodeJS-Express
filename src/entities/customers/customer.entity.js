const makeCustomerEntity = ({}) => {
  function containsSpecialChars(string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(string);
  }

  return function createCustomer(customer) {
    const { firstname, lastname, contact, address } = customer;

    if (!firstname) {
      throw new Error("Enter Customer's Firstname");
    }

    if (!lastname) {
      throw new Error("Enter Customer's Lastname");
    }

    if (!contact) {
      throw new Error("Enter Customer's Contact Number");
    }

    if (!address) {
      throw new Error("Enter Customer's Address");
    }

    if (containsSpecialChars(firstname) || containsSpecialChars(lastname)) {
      throw new Error("Name should not contain any special character");
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
