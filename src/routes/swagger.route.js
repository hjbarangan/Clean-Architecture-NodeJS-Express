const router = require("express").Router();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc")



const swaggerOptions = {
    swaggerDefinition: {
      info:{
        title: "Dealership API",
        description: "Document the API using Swagger",
        servers: ["http://localhost:5000"]
      }
    },
    apis: ["./**.route.js"]
  }
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions)

router.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));


module.exports = router;
