const TrendingGift = require("../models/TrendingGift");

exports.createTrendGift = async (req, res) => {
  try {
    const saveTrendGift = new TrendingGift(req.body);
    const result = await saveTrendGift.save();

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

exports.getTrendGift = async (req, res) => {
  try {
    const result = await TrendingGift.find({});

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

exports.getTrendGiftById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TrendingGift.findOne({ _id: id });

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

exports.deleteTrendGift = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TrendingGift.deleteOne({ _id: id });

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

exports.updateTrendGift = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await TrendingGift.updateOne({ _id: id }, body);

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
