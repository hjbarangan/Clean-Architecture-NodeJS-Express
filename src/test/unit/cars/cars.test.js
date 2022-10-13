const makeCarEntity = require("../../../entities/cars/index");

describe("Test Add Car", () => {
  it("must not be able to add without a serial number", () => {
    let car = {
      serial_number: undefined,
      brand: "Toyota",
      model: "Raize",
      color: "Red",
      year: "2000",
      price: 50000,
      car_for_sale: "Yes",
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
      car_for_sale: "Yes",
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
      car_for_sale: "Yes",
    };

    expect(() => makeCarEntity(car)).toThrow("Car must have model!");
  });

  it("must have a color", () => {
    let car = {
      serial_number: "H371KSLF",
      brand: "Toyota",
      model: "Raize",
      color: undefined,
      year: "2020",
      price: 4000000,
      car_for_sale: "Yes",
    };

    expect(() => makeCarEntity(car)).toThrow("Car must have color!");
  });

  it("must have a year", () => {
    let car = {
      serial_number: "H371KSLF",
      brand: "Toyota",
      model: "Raize",
      color: "Red",
      year: undefined,
      price: 4000000,
      car_for_sale: "Yes",
    };

    expect(() => makeCarEntity(car)).toThrow("Car must have year!");
  });

  it("must have a price", () => {
    let car = {
      serial_number: "H371KSLF",
      brand: "Toyota",
      model: "Raize",
      color: "Red",
      year: "2020",
      price: undefined,
      car_for_sale: "Yes",
    };

    expect(() => makeCarEntity(car)).toThrow("Car must have car price!");
  });

  it("indicate whether it is brand new or second hand", () => {
    let car = {
      serial_number: "H371KSLF",
      brand: "Toyota",
      model: "Raize",
      color: "Red",
      year: "2020",
      price: 5000000,
      brand_new: undefined,
    };

    expect(() => makeCarEntity(car)).toThrow("Is car brand new or second hand?");
  });

  it("price must be a number", () => {
    let car = {
      serial_number: "H371KSLF",
      brand: "Toyota",
      model: "Raize",
      color: "Red",
      year: "2020",
      price: "One million, Five Hundred Thousand",
      car_for_sale: "Yes",
    };

    expect(() => makeCarEntity(car)).toThrow("Price should be a number!");
  });
});
