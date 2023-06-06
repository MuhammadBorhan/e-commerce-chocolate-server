const nodemailer = require("nodemailer");
const EventUser = require("../models/EventUser");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "mdborhanuddinmajumder058@gmail.com",
    pass: "0317371981wub",
  },
});

// exports.createEventUser = (req, res) => {
//   const { name, email, phone } = req.body;

//   EventUser.findOne({ email })
//     .then((existingUser) => {
//       if (existingUser) {
//         return res
//           .status(400)
//           .json({ error: "User already registered for this event" });
//       }

//       const user = new EventUser({ name, email, phone });
//       user
//         .save()
//         .then(() => {
//           const mailOptions = {
//             from: "mdborhanuddinmajumder058@gmail.com",
//             to: email,
//             subject: "Event Registration",
//             text: `Thank you for registering for the event. Here is the Google Meet link: thank you`,
//           };

//           transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//               console.error(error);
//               return res.status(500).json({ error: "Failed to send email" });
//             }
//             res.status(201).json(user);
//           });
//         })
//         .catch((err) =>
//           res.status(500).json({ error: "Failed to register user" })
//         );
//     })
//     .catch((err) =>
//       res.status(500).json({ error: "Failed to check existing user" })
//     );
// };

exports.sendEmail = (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "0317371981@student.wub.edu.bd",
      pass: "0317371981",
    },
  });

  const mailOptions = {
    from: "0317371981@student.wub.edu.bd",
    to: "drakroom4@gmail.com",
    subject: "Welcome to our application",
    text: "Hello, welcome to our application!",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

exports.createEventUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    EventUser.findOne({ email }).then((existingUser) => {
      if (existingUser) {
        return res
          .status(400)
          .json({ error: "User already registered for this event" });
      }
      const newEventUser = new EventUser({ name, email, phone });

      const result = newEventUser.save();

      res.status(200).json({
        status: "Success",
        message: "Data inserted successfully!",
        data: result,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.getEventUser = async (req, res) => {
  try {
    const result = await EventUser.find({});

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

// exports.getEventById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await Event.findOne({ _id: id });

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

// exports.deleteEvent = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await Event.deleteOne({ _id: id });

//     res.status(200).json({
//       status: "Successfully Delete",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: "Can't delete data",
//       error: error.message,
//     });
//   }
// };

// exports.updateEvent = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const body = req.body;
//     const result = await Event.updateOne({ _id: id }, body);

//     res.status(200).json({
//       status: "Successfully update",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: "Couldn't update",
//       error: error.message,
//     });
//   }
// };
