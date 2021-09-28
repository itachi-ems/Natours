const express = require("express");
const userController = require("../controllers/usercontroller");
const userRoute = express.Router();

userRoute.param('id',(req,res,next,val)=>{
    console.log(`user id is ${val}`);
    next();
});
userRoute
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);
userRoute
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRoute;
