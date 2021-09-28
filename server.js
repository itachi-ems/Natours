require("dotenv").config();
const mongoose = require("mongoose");
const connectdb = require("./DB/connection");
const app = require("./app");

connectdb();


app.listen(process.env.PORT, () => {
  console.log("app running successfully");
});
