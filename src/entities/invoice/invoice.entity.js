const makeInvoiceEntity = ({}) => {
  //data
  return function createCustomer(invoice) {
    const { invoice_number, car_id, customer_id, salesperson_id } = invoice;

    //condition
    if (!invoice_number) {
      throw new Error("Enter Invoice Number");
    }

    if (!car_id) {
      throw new Error("Where's your car dude?");
    }

    if (!customer_id) {
      throw new Error("Y'all should have a customer");
    }

    if (!salesperson_id) {
      throw new Error(
        "Bruh, You can't buy a car without my homie salesperson!"
      );
    }

    return Object.freeze({
      invoice_number,
      car_id,
      customer_id,
      salesperson_id,
    });
  };
};

module.exports = makeInvoiceEntity;
