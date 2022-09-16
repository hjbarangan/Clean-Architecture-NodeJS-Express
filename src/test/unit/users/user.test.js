const makeUserEntity = require("../../../entities/users/index");

describe("Test User Registration", () => {
  it("must not be able to add without a firstname", () => {
    let user = {
     firstname: null,
     lastname: "Barangan",
     email: "bar@example.com",
     password: "123456789"
    };

    expect(() => makeUserEntity(user)).toThrow(
      "User must have a firstname!"
    );
  });

  it("must not be able to add without a lastname", () => {
    let user = {
        firstname: "Herzlia",
        lastname: null,
        email: "bar@example.com",
        password: "123456789"
       };
    expect(() => makeUserEntity(user)).toThrow(
      "User must have a lastname!"
    );
  });

  it("must not be able to add without an email", () => {
    let user = {
        firstname: "Herzlia",
        lastname: "Barangan",
        email: null,
        password: "123456789"
       };
    expect(() => makeUserEntity(user)).toThrow(
      "User should have an email!"
    );
  });


  it("must not be able to add without a password", () => {
    let user = {
        firstname: "Herzlia",
        lastname: "Barangan",
        email: "bar@example.com",
        password: null
       };
    expect(() => makeUserEntity(user)).toThrow(
      "User must have password!"
    );
  });


  //insert here test case for invalid email, password length, name should not contain in number or specialChars

  it("must not be able to add invalid email", () => {
    let user = {
        firstname: "Herzlia",
        lastname: "Barangan",
        email: "barexamplecom",
        password: "123456789"
       };
    expect(() => makeUserEntity(user)).toThrow(
      "Email should be a valid email!"
    );
  });

  it("password should be atleast 8 characters", () => {
    let user = {
        firstname: "Herzlia",
        lastname: "Barangan",
        email: "bar@example.com",
        password: "12345"
       };
    expect(() => makeUserEntity(user)).toThrow(
      "Password length must be atleast 8 characters!"
    );
  });
  
  it("name should not contain numbers", () => {
    let user = {
        firstname: "Herzlia4",
        lastname: "Barangan",
        email: "bar@example.com",
        password: "12345678"
       };
    expect(() => makeUserEntity(user)).toThrow(
      "Name should not contain numbers!"
    );
  });



  it("name should not contain special characters", () => {
    let user = {
        firstname: "Herzlia!",
        lastname: "Barangan",
        email: "bar@example.com",
        password: "12345678"
       };
    expect(() => makeUserEntity(user)).toThrow(
      "Name should not contain any special character"
    );
  });

});
