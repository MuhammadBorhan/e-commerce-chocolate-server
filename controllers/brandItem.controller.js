const chocolateBrandsItem = require("../models/BrandsItem");

exports.postBrandItem = async (req, res, next) => {
  try {
    const brandItem = new chocolateBrandsItem(req.body);
    const result = await brandItem.save();

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

exports.getBrandsItem = async (req, res, next) => {
  try {
    const result = await chocolateBrandsItem.find({});

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
