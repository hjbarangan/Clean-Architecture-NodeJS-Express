const makeMechanicEntity = require("../../entities/mechanic/index");

describe("Test Add Mechanic", () => {
  it("must not be able to add without a firstname", () => {
    let mechanic = {
      firstname: undefined,
      lastname: "Habla",
      contact: "+639268186409",
    };

    expect(() => makeMechanicEntity(mechanic)).toThrow(
      "Mechanic's firstname is required."
    );
  });

  it("must not be able to add without a lastname", () => {
    let mechanic = {
      firstname: "Mary Christine Anne",
      lastname: undefined,
      contact: "+639268186409",
    };

    expect(() => makeMechanicEntity(mechanic)).toThrow(
      "Mechanic's lastname is required."
    );
  });

  it("must not be able to add without a contact number", () => {
    let mechanic = {
      firstname: "Mary Christine Anne",
      lastname: "Habla",
      contact: undefined,
    };

    expect(() => makeMechanicEntity(mechanic)).toThrow(
      "Mechanic's contact number is required."
    );
  });

  it("name should not contain special characters", () => {
    let mechanic = {
      firstname: "Mary Christine Anne?",
      lastname: "Habla!",
      contact: "+639268186409",
    };

    expect(() => makeMechanicEntity(mechanic)).toThrow(
      "Name should not contain any special character."
    );
  });

  it("name should not contain numbers", () => {
    let mechanic = {
      firstname: "Mary Christine Anne123",
      lastname: "Habla456",
      contact: "+639268186409",
    };

    expect(() => makeMechanicEntity(mechanic)).toThrow(
      "Name should not contain any numbers."
    );
  });





  
});
