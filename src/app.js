if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");

app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);

// NOT FOUND HANDLER
app.use((req, res, next) => {
  next({ status: 404, error: `Path not found: ${req.originalUrl}` });
});

// ERROR HANDLER
app.use((error, req, res, next) => {
  const { status = 500, error: errMsg } = error;
  res.status(status).json({ error: errMsg });
});

module.exports = app;
