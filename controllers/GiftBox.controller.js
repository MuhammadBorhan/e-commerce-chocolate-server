const GiftBox = require("../models/GiftBox");

exports.createGiftBox = async (req, res) => {
  try {
    const saveGiftBox = new GiftBox(req.body);
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
