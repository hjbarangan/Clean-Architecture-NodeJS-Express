// const user_email =
// const user_password =

// describe("Logging in user (department head & PG)", () => {
//     //
//     test("loginUser() - must have a email and password. Account doesn't exists.", async () => {
//       const email = "dummy@gmail.com";
//       const password = "dummy";
//       const data = await app.loginUser(email, password);
//       expect(data).toBe("Error");
//     });
//     //
//     test("loginUser() - no email entered, just password.", async () => {
//       const email = "";
//       const password = admin_password;
//       const data = await app.loginUser(email, password);
//       expect(data).toBe("Error");
//     });
//     //
//     test("loginUser() - no password entered, just email.", async () => {
//       const email = admin_email;
//       const password = "";
//       const data = await app.loginUser(email, password);
//       expect(data).toBe("Error");
//     });
//     //
//     test("loginUser() - must have a email and password. Account exists.", async () => {
//       const email = admin_email;
//       const password = admin_password;
//       const data = await app.loginUser(email, password);
//       const result = data.patched;

//       expect(result).not.toBe(0);
//     });
//   });

// Sample test for clean architecture

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../server");

chai.use(chaiHttp);
chai.expect();
const makeCarEntity = require("../../entities/cars/car.entity/index");

describe("Test Add Car", () => {
  it("must not be able to add without a serial number", () => {
    chai.request(server).post("/cars/add").send(car);
    let car = {
      serial_number: undefined,
      brand: "Toyota",
      model: "Raize",
      color: "Red",
      year: "2000",
      price: 50000,
    };

    expect(() => makeCarEntity(car)).toThrow("Car must have serial number");
  });

  it("must have a brand", () => {
    let car = {
      serial_number: "H371KSLF",
      brand: undefined,
      model: "Raize",
      color: "Red",
      year: "2020",
      price: 4000000,
    };

    expect(() => makeCarEntity(car)).toThrow("Car must have brand!");
  });

  it("must have a model", () => {
    let car = {
      serial_number: "H371KSLF",
      brand: "Toyota",
      model: undefined,
      color: "Red",
      year: "2020",
      price: 4000000,
    };

    expect(() => makeCarEntity(car)).toThrow("Car must have a model!");
  });

  it("must have a color", () => {
    let car = {
      serial_number: "H371KSLF",
      brand: "Toyota",
      model: "Raize",
      color: undefined,
      year: "2020",
      price: 4000000,
    };

    expect(() => makeCarEntity(car)).toThrow("Car must have color!");
  });
});
