const makeCustomerEntity = ({}) => {
  return async function make({
    firstname,
    lastname,
    contact,
    address,
  } = {}) {
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

    return Object.freeze({
      firstname,
      lastname,
      contact,
      address,
    });
  };
};

module.exports = makeCustomerEntity;
