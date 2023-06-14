const Brand = require("../models/Brand");
const fs = require("fs");

exports.createBrand = async (req, res) => {
  try {
    const newBrand = new Brand({
      name: req.body.name,
      desc: req.body.desc,
      image: req.files["image"][0].path,
      logo: req.files["logo"][0].path,
    });
    const result = await newBrand.save();

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

exports.getBrands = async (req, res) => {
  try {
    const result = await Brand.find({});

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

exports.getBrandById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Brand.findOne({ _id: id });

    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get data by id",
      error: error.message,
    });
  }
};

exports.deleteBrandById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Brand.findOneAndDelete({ _id: id });

    const imagePath = result.logo;
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

    const imagePath2 = result.image;
    fs.access(imagePath2, (err) => {
      if (err) {
        console.log("image does not exist");
      } else {
        fs.unlink(imagePath2, (error) => {
          if (error) throw error;
          console.log("image was deleted");
        });
      }
    });

    res.status(200).json({
      status: "Successfully Delete Brand",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't delete Brand",
      error: error.message,
    });
  }
};

exports.updateBrandById = async (req, res) => {
  try {
    const { id } = req.params;

    if (req.files[0]) {
      const body = req.body;
      const image = req.files["image"][0].path;
      const logo = req.files["logo"][0].path;
      const result = await Brand.updateOne(
        { _id: id },
        { ...body, image, logo }
      );

      res.status(200).json({
        status: "Successfully update the Brands",
        data: result,
      });
    } else {
      const body = req.body;
      const result = await Brand.updateOne({ _id: id }, body);

      res.status(200).json({
        status: "Successfully update the Brand",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't update the Brand",
      error: error.message,
    });
  }
};

// exports.updateBrandWithoutImage = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const body = req.body;
//     const result = await Brand.updateOne({ _id: id }, body);

//     res.status(200).json({
//       status: "Successfully update the Brand",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: "Couldn't update the Brand",
//       error: error.message,
//     });
//   }
// };
