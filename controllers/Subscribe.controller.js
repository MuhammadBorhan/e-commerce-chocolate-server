const Subscribe = require("../models/Subscribe");
const Package = require("../models/Package");
const { default: mongoose } = require("mongoose");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mdborhanuddinmajumder058@gmail.com",
    pass: "nwmipbitqdrjyivz",
  },
});

exports.createSubscribe = async (req, res) => {
  try {
    const { name, email, userName } = req.body;
    // Insert the new subscription into the Subscribe collection
    const result = await Subscribe.create({ name, email, userName });

    // Update the count in the Package collection
    await Package.findOneAndUpdate(
      { name },
      { $inc: { count: 1 } },
      { new: true }
    );

    const mailOptions = {
      from: "Indulge Chocolate",
      to: email,
      subject: "Subscription Confirmation",
      html: `<div>
        <p>Dear ${userName} ,</p>
        <h3>Thank you for your Subscription. </h3>
      </div>`,
    };
    const mailOptions2 = {
      from: "Indulge Chocolate",
      to: "mdborhanuddinmajumder058@gmail.com",
      subject: "Subscription Confirmation",
      html: `<div>
        <h3>You have new Subscriber whos name is ${userName} and E-mail is ${email}. </h3>
      </div>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to send email" });
      }
      res.status(201).json(user);
    });

    transporter.sendMail(mailOptions2, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to send email" });
      }
      res.status(201).json(user);
    });

    res.status(200).json({
      status: "Success",
      message: " inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data is not inserted",
      error: error.message,
    });
  }
};

exports.getAllSubscriber = async (req, res, next) => {
  try {
    const result = await Subscribe.find();

    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get Subscriber",
      error: error.message,
    });
  }
};

// exports.getPackageById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await Package.findById({ _id: id });

//     res.status(200).json({
//       status: "Success",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: "Can't get the data",
//       error: error.message,
//     });
//   }
// };

exports.deleteSubscribe = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Find the subscription by ID and delete
    const deletedSubscription = await Subscribe.findByIdAndDelete(id);

    // Update the count in the Package collection
    await Package.findOneAndUpdate(
      { name: deletedSubscription.name },
      { $inc: { count: -1 } },
      { new: true }
    );

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

// exports.updatePackage = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const body = req.body;
//     const result = await Package.findOneAndUpdate({ _id: id }, body);

//     res.status(200).json({
//       status: "Successfully Update",
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
