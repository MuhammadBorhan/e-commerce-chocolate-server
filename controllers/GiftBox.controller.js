const GiftBox = require("../models/GiftBox");
const SelectGiftBox = require("../models/SelectGiftBox");

exports.createGiftBox = async (req, res) => {
  try {
    // const saveGiftBox = new GiftBox(req.body);
    const saveGiftBox = new GiftBox({
      name: req.body.name,
      brand: req.body.brand,
      productList: req.body.productList,
      image: req.file.path,
    });

    const result = await saveGiftBox.save();

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

exports.getGiftBox = async (req, res) => {
  try {
    const result = await GiftBox.find({});

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

exports.getGiftBoxById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await GiftBox.findOne({ _id: id });

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

exports.deleteGiftBox = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await GiftBox.deleteOne({ _id: id });

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

exports.updateGiftBox = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await GiftBox.updateOne({ _id: id }, body);

    res.status(200).json({
      status: "Successfully update",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't update",
      error: error.message,
    });
  }
};

// select gift box
exports.createSelectGiftBox = async (req, res) => {
  try {
    const saveSelectGiftBox = new SelectGiftBox(req.body);
    const result = await saveSelectGiftBox.save();

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

exports.getSelectGiftBox = async (req, res) => {
  try {
    const result = await SelectGiftBox.find({});

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

exports.deleteSelectGiftBox = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SelectGiftBox.deleteOne({ _id: id });

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
