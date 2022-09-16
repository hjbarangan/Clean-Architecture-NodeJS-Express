const makeSalespersonEntity = require("../../../entities/salesperson/index");

describe("Test Add Salesperson", () => {
  it("must not be able to add without a firstname", () => {
    let salesperson = {
      firstname: undefined,
      lastname: "Habla",
      contact: "+639268186409",
    };

    expect(() => makeSalespersonEntity(salesperson)).toThrow(
      "Salesperson's firstname is required."
    );
  });

  it("must not be able to add without a lastname", () => {
    let salesperson = {
      firstname: "Mary Christine Anne",
      lastname: undefined,
      contact: "+639268186409",
    };

    expect(() => makeSalespersonEntity(salesperson)).toThrow(
      "Salesperson's lastname is required."
    );
  });

  it("must not be able to add without a contact number", () => {
    let salesperson = {
      firstname: "Mary Christine Anne",
      lastname: "Habla",
      contact: undefined,
    };

    expect(() => makeSalespersonEntity(salesperson)).toThrow(
      "Salesperson's contact number is required."
    );
  });

  it("name should not contain special characters", () => {
    let salesperson = {
      firstname: "Mary Christine Anne?",
      lastname: "Habla!",
      contact: "+639268186409",
    };

    expect(() => makeSalespersonEntity(salesperson)).toThrow(
      "Name should not contain any special character."
    );
  });

  it("name should not contain numbers", () => {
    let salesperson = {
      firstname: "Mary Christine Anne123",
      lastname: "Habla456",
      contact: "+639268186409",
    };

    expect(() => makeSalespersonEntity(salesperson)).toThrow(
      "Name should not contain any numbers."
    );
  });





  
});
