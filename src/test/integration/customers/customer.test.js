const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../../server");
chai.should();
chai.use(chaiHttp);

describe("Customers API", () => {
  //   describe("Login Test", () => {
  //     it("It should login a user and should return all the customers", async () => {
  //     const response = await chai
  //         .request(app)
  //         .post("/api/login")
  //         .send({
  //           email: "jaemin@gmail.com",
  //           password: "admin123",
  //         })

  //         expect(response.statusCode).toEqual(200);
  //     });
  //   });

  let token;

  beforeAll(async () => {
    const response = await chai
      .request(app)
      .post("/api/login")
      .send({ email: "jaemin@gmail.com", password: "admin123" });
    token = response.body.token;
  });

  describe("Customer Test", () => {
    it("It should add a customer", async () => {
      const response = await chai
        .request(app)
        .post("/api/customer/add")
        .set("Authorization", token)
        .send({
          firstname: "jaemingmailcom",
          lastname: "admin",
          contact: "+639268186409",
          address: "Javier Subd"
        });
      expect(response.statusCode).toEqual(200);
    });

    it("It should return all the customers", async () => {
      const response = await chai
        .request(app)
        .get("/api/customer")
        .set("Authorization", token);
      expect(response.statusCode).toEqual(200);
    });

    it("It should return customer's details", async () => {
      const response = await chai
        .request(app)
        .get("/api/customer/view/2")
        .set("Authorization", token);
      expect(response.statusCode).toEqual(200);
    });

    it("It should edit a customer", async () => {
      const response = await chai
        .request(app)
        .put("/api/customer/edit/89")
        .set("Authorization", token)
        .send({
          firstname: "jaemin",
          lastname: "na",
          contact: "+639268186409",
          address: "Javier Subd"
        });
      expect(response.statusCode).toEqual(200);
    });

    it("It should set the customer as inactive", async () => {
      const response = await chai
        .request(app)
        .patch("/api/customer/delete/89")
        .set("Authorization", token);
      expect(response.statusCode).toEqual(200);
    });
  });
});
