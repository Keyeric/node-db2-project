const express = require("express");
const helmet = require("helmet");

const server = express();

// Router
const carRouter = require("../cars/carRouter");

server.use(helmet());
server.use(express.json());

// Endpoint routers
server.use("/api/cars", carRouter);

//Base url endpoint(s)
server.get("/", (req, res) => {
  res.send(`<h1>Hot Rods Inbound!</h1><h2>Navigate to</h2> <h3>/api</h3>`);
});

server.get("/api", (req, res) => {
  res.send(`<h1>Navigate to</h1> <h2>/cars</h2>`);
});

module.exports = server;
