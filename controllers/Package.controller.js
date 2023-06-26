const mongoose = require("mongoose");
const Package = require("../models/Package");

exports.createPackage = async (req, res, next) => {
  try {
    const savePackage = new Package(req.body);
    const result = await savePackage.save();

    res.status(200).json({
      status: "Success",
      message: "Package inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Package is not inserted",
      error: error.message,
    });
  }
};

exports.getAllPackage = async (req, res, next) => {
  try {
    const result = await Package.find();

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

exports.getPackageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Package.findById({ _id: id });

    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.deletePackage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Package.findOneAndDelete({ _id: id });

    res.status(200).json({
      status: "Successfully Delete",
      data: result,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      res.status(400).json({
        status: "fail",
        message: "Invalid id",
        error: error.message,
      });
    }
  }
};

exports.updatePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await Package.findOneAndUpdate({ _id: id }, body);

    res.status(200).json({
      status: "Successfully Update",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't update the Product",
      error: error.message,
    });
  }
};

// exports.updateProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const body = req.body;
//     const result = await products.updateOne({ _id: id }, body);

//     res.status(200).json({
//       status: "Successfully update the Product",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: "Couldn't update the Product",
//       error: error.message,
//     });
//   }
// };
