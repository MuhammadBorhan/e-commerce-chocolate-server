const products = require("../models/Products");
const fs = require("fs");

exports.createProduct = async (req, res, next) => {
  try {
    const saveProduct = new products({
      name: req.body.name,
      brand: req.body.brand,
      price: req.body.price,
      color: req.body.color,
      desc: req.body.desc,
      image: req.file.path,
    });
    const result = await saveProduct.save();

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

exports.getProducts = async (req, res, next) => {
  try {
    const result = await products.find({});

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

exports.getProductByBrand = async (req, res, next) => {
  try {
    const brand = req.query.brand;
    const result = await products.find({ brand: brand });

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

exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await products.findOne({ _id: id });

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

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await products.findOneAndDelete({ _id: id });

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
    res.status(400).json({
      status: "fail",
      message: "Can't delete data",
      error: error.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.file) {
      const body = req.body;
      const image = req.file.path;
      const result = await products.updateOne({ _id: id }, { ...body, image });

      res.status(200).json({
        status: "Successfully update the Product",
        data: result,
      });
    } else {
      const body = req.body;
      const result = await products.updateOne({ _id: id }, body);

      res.status(200).json({
        status: "Successfully update the Product",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't update the Product",
      error: error.message,
    });
  }
};
