const makeCustomerEntity = require("../../entities/customers/index");

describe("Test Add Customer", () => {
  it("must not be able to add without a firstname", () => {
    let customer = {
      firstname: undefined,
      lastname: "Habla",
      contact: "+639268186409",
      address: "Javier Subd. Polomolok",
    };

    expect(() => makeCustomerEntity(customer)).toThrow(
      "Customer's firstname is required."
    );
  });

  it("must not be able to add without a lastname", () => {
    let customer = {
      firstname: "Mary Christine Anne",
      lastname: undefined,
      contact: "+639268186409",
      address: "Javier Subd. Polomolok",
    };

    expect(() => makeCustomerEntity(customer)).toThrow(
      "Customer's lastname is required."
    );
  });

  it("must not be able to add without a contact number", () => {
    let customer = {
      firstname: "Mary Christine Anne",
      lastname: "Habla",
      contact: undefined,
      address: "Javier Subd. Polomolok",
    };

    expect(() => makeCustomerEntity(customer)).toThrow(
      "Customer's contact number is required."
    );
  });

  it("must not be able to add without address", () => {
    let customer = {
      firstname: "Mary Christine Anne",
      lastname: "Habla",
      contact: "+639268186409",
      address: undefined,
    };

    expect(() => makeCustomerEntity(customer)).toThrow(
      "Customer's address is required."
    );
  });

  it("name should not contain special characters", () => {
    let customer = {
      firstname: "Mary Christine Anne?",
      lastname: "Habla!",
      contact: "+639268186409",
      address: "Javier Subd. Polomolok",
    };

    expect(() => makeCustomerEntity(customer)).toThrow(
      "Name should not contain any special character."
    );
  });

  it("name should not contain numbers", () => {
    let customer = {
      firstname: "Mary Christine Anne123",
      lastname: "Habla456",
      contact: "+639268186409",
      address: "Javier Subd. Polomolok",
    };

    expect(() => makeCustomerEntity(customer)).toThrow(
      "Name should not contain any numbers."
    );
  });
});
