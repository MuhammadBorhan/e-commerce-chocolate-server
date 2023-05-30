const Brand = require("../models/Brand");

exports.createBrand = async (req, res) => {
  try {
    const newBrand = new Brand({
      name: req.body.name,
      desc: req.body.desc,
      image: req.files["image"][0].filename,
      logo: req.files["logo"][0].filename,
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
    const result = await Brand.deleteOne({ _id: id });

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

exports.updateBrandWithImage = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const image = req.files["image"][0].filename;
    const logo = req.files["logo"][0].filename;
    const result = await Brand.updateOne({ _id: id }, { ...body, image, logo });

    res.status(200).json({
      status: "Successfully update the Brand",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't update the Brand",
      error: error.message,
    });
  }
};

exports.updateBrandWithoutImage = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await Brand.updateOne({ _id: id }, body);

    res.status(200).json({
      status: "Successfully update the Brand",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't update the Brand",
      error: error.message,
    });
  }
};
