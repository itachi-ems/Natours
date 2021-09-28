const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, "A user must have a Name"] },
    email: {
      type: String,
      required: [true, "A user must have an email"],
      unique: true,
    },
    password: { type: String, required: [true, "A user must have a Password"] },
    role: { type: String, default: "Developer" },
  });
  const User = mongoose.model("User", userSchema);

  module.exports=User;