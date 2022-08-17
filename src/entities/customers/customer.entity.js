const makeCustomerEntity = ({make}) => {
  return make = ({ data } = {}) => {
    const { firstname, lastname, contact_number, address } = data;

    // conditions

    if (!firstname) {
      throw new Error("Enter Customer's Firstname");
    }

    if (!lastname) {
      throw new Error("Enter Customer's Lastname");
    }

    if (!contact_number) {
      throw new Error("Enter Customer's Contact Number");
    }

    if (!address) {
      throw new Error("Enter Customer's Address");
    }
    return Object.freeze(data);
  };
};

module.exports = makeCustomerEntity;
