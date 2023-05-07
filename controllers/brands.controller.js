const chocolateBrands = require("../models/Brands");

exports.postBrand = async (req, res, next) => {
  try {
    const brands = new chocolateBrands(req.body);
    const result = await brands.save();

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

exports.getBrands = async (req, res, next) => {
  try {
    const result = await chocolateBrands.find({});

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
