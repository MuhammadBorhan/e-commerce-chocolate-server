const { default: mongoose } = require("mongoose");
const BlankBox = require("../models/BlankBox");
const fs = require("fs");

exports.createBlankBox = async (req, res, next) => {
  try {
    const saveBlankBox = new BlankBox({
      name: req.body.name,
      festival: req.body.festival,
      image: req.file.path,
    });
    const result = await saveBlankBox.save();

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

exports.getAllBlankBox = async (req, res, next) => {
  try {
    const result = await BlankBox.find();

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

exports.getBlankBoxById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await BlankBox.findOne({ _id: id });

    // if (!result) {
    //   res.status(200).json({
    //     status: "fail",
    //     message: "id did not found",
    //   });
    // }

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

exports.deleteBlankBox = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await BlankBox.findOneAndDelete({ _id: id });

    const imagePath = result.image;
    fs.access(imagePath, (err) => {
      if (err) {
        console.log("image does not exist");
      } else {
        fs.unlink(imagePath, (error) => {
          if (error) throw error;
          console.log("image was deleted");
        });
      }
    });

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

// exports.updateProductWithImage = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const body = req.body;
//     const image = req.file.path;
//     const result = await products.updateOne({ _id: id }, { ...body, image });

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
