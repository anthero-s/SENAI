const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "API loja de jogos",
    description: "API para gerenciamento de uma loja de jogos",
    version: "1.0.0"
  },
  host: "localhost:3001",
  schemes: ["http"]
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);