const brandProducts = require("../models/BrandProducts");

exports.postBrandProduct = async (req, res, next) => {
  try {
    const brandProduct = new brandProducts(req.body);
    const result = await brandProduct.save();

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

exports.getBrandProduct = async (req, res, next) => {
  try {
    const result = await brandProducts.find({});

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
