const express = require("express");
const tourController = require("../controllers/tourcontroller");
const tourRoute = express.Router();


tourRoute
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);

tourRoute
  .route("/:id")
  .get(tourController.getTourById)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports=tourRoute;
