const Tour = require("../models/tourmodel");

exports.getAllTours = async (req, res) => {
  try {
    //BUILD QUERY
    //1)Filtering
    const queryobj = { ...req.query };
    const excludefields = ["sort", "limit", "page"];
    excludefields.forEach((el) => delete queryobj[el]);
    console.log(req.query, queryobj);
    //2)Advance Filtering
    let querystr = JSON.stringify(queryobj);
    querystr = querystr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    console.log(JSON.parse(querystr));

    const query = Tour.find(JSON.parse(querystr));

    //EXECUTE QUERY
    const tours = await query;
    //SEND RESPONSE
    res
      .status(200)
      .json({ status: "success", results: tours.length, data: { tours } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

exports.createTour = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    res
      .status(200)
      .json({ status: "success", message: "Tour created successfully" });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

exports.getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res
      .status(200)
      .json({ status: "success", results: tour.length, data: { tour } });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const updateTour = await Tour.findByIdAndUpdate(req.params.id, req.body);
    res
      .status(200)
      .json({
        status: "success",
        results: updateTour.length,
        data: { updateTour },
      });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const deleteTour = await Tour.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ status: "success", message: "Tour deleted successfully" });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};
