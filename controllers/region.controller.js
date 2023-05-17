const Regions = require("../models/Region");

exports.getRegions = async (req, res, next) => {
  try {
    const result = await Regions.find({}).sort({ region: 1 });

    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get data",
      error: error.message,
    });
  }
};

exports.getRegionsDistrict = async (req, res, next) => {
  try {
    const region = req.query.region;
    const result = await Regions.find({ region: region }, "district");

    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get data",
      error: error.message,
    });
  }
};

exports.postRegion = async (req, res, next) => {
  try {
    const region = new Regions(req.body);
    const result = await region.save();

    res.status(200).json({
      status: "Success",
      message: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.updateRegion = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const region = await Regions.updateOne({ _id: id }, body);

    res.status(200).json({
      status: "Success",
      message: "Data update successfully!",
      data: region,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not update",
      error: error.message,
    });
  }
};
