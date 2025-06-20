if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); 
app.use(express.json());

const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");

app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter);

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
