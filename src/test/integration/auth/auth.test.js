const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require('../../../server')
chai.should();
chai.use(chaiHttp);

describe("Login Test", () => {
  it("It should login a user and should return all the customers", async () => {
    const response = await chai
      .request(app)
      .post("/api/login")
      .send({
        email: "jaemin@gmail.com",
        password: "admin123",
      })
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("user_id");
    expect(response.body).toHaveProperty("token");
    expect(response.body).toHaveProperty("email");
  });
});






