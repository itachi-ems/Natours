require('dotenv').config()
const userRouter = require("./routes/userRoutes");
const tourRouter = require('./routes/tourRoutes');

const express = require("express");
const morgan = require("morgan");


const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
