const User = require("../models/usermodel");

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.password) {
//     return res.json({ status: "400", message: "Name or password missing" });
//   }
//   next();
// };

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(500)
      .json({ status: "success", results: users.length, data: { users } });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(500).json({ message: "User created successfuly!" });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "invalid Data sent!",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res
      .status(500)
      .json({ status: "success", results: user.length, data: { user } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updateduser = await User.findByIdAndUpdate(req.params.id, req.body ,{
      new:true,
      runValidators:true
    });

    res
      .status(500)
      .json({
        status: "success",
        results: updateduser.length,
        data: { updateduser },
      });
  } catch (err) {
    res.status(400).json({status:"fail",message:err})
  }
};
exports.deleteUser = async (req, res) => {
  try{
    const deleteuser = await User.findByIdAndDelete(req.params.id)
    res.status(500).json({ status:"success",data:{deleteuser}});
  }
  catch{
    res.status(400).json({status:"fail",message:err})
  }
  
};
