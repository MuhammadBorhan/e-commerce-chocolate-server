const nodemailer = require("nodemailer");
const Order = require("../models/Order");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mdborhanuddinmajumder058@gmail.com",
    pass: "xljtamqdodkuxbzp",
  },
});
exports.postOrder = async (req, res, next) => {
  const { email, product, firstName, lastName, orderNumber } = req.body;
  try {
    const order = new Order(req.body);
    const result = await order.save();

    const mailOptions = {
      from: "Indulge Chocolate",
      to: email,
      subject: "Order Confirmation",
      html: `<div>
      <p>Dear ${firstName} ${lastName},</p>
      <h3>Thank you for your order. Your order number is  #${orderNumber}!</h3>
    </div>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to send email" });
      }
      res.status(201).json(user);
    });

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
