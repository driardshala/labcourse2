import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Swagger definition
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-commerce API",
      version: "1.0.0",
      description: "API for managing users, products, and orders in an e-commerce app",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"], // Swagger will read JSDoc comments from route files
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
