const customerEntity = () => {
  //insert here the data structure\

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
  return Object.freeze({
    customer_firstname: firstname,
    customer_lastname: lastname,
    customer_contact_number: contact_number,
    customer_address: address,
  });
};

module.exports = customerEntity;
