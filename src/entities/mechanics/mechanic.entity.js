const mechanicEntity = (mechanic) => {
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

  return Object.freeze({
    firstname,
    lastname,
    contact
  });
};

module.exports = mechanicEntity;
