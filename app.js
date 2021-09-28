require('dotenv').config()
const express = require("express");
const morgan = require("morgan");

const userRouter = require("./routes/userRoutes");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/users", userRouter);

module.exports = app;
