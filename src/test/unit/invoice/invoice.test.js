const makeInvoiceEntity = require("../../../entities/invoice/index");

describe("Test Create Invoice", () => {
  it("must not be able to add without a car", () => {
    let invoice = {
     car_id: null,
     customer_id: 1,
     salesperson_id: 1
    };

    expect(() => makeInvoiceEntity(invoice)).toThrow(
      "Car is required"
    );
  });

  it("must not be able to add without a customer", () => {
    let invoice = {
        car_id: 1,
        customer_id: null,
        salesperson_id: 1
    };

    expect(() => makeInvoiceEntity(invoice)).toThrow(
      "Customer is required"
    );
  });

  it("must not be able to add without a salesperson", () => {
    let invoice = {
        car_id: 1,
        customer_id: 1,
        salesperson_id: null
    };

    expect(() => makeInvoiceEntity(invoice)).toThrow(
      "Salesperson is required"
    );
  });



  
});
