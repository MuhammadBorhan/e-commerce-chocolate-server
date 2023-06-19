const Order = require("../models/Order");

exports.postOrder = async (req, res, next) => {
  try {
    const order = new Order(req.body);
    const result = await order.save();

    res.status(200).json({
      status: "Success",
      message: "Order successfully Done!!!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Order does not complete!!!",
      error: error.message,
    });
  }
};

exports.getOrders = async (req, res, next) => {
  try {
    const result = await Order.find();

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

exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Order.findOne({ _id: id });

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

exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const order = await Order.updateOne({ _id: id }, body);

    res.status(200).json({
      status: "Success",
      message: "Order update successfully!",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Order does not update",
      error: error.message,
    });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Order.deleteOne({ _id: id });

    res.status(200).json({
      status: "Success",
      message: "Data delete successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not deleted",
      error: error.message,
    });
  }
};
