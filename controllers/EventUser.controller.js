const nodemailer = require("nodemailer");
const EventUser = require("../models/EventUser");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mdborhanuddinmajumder058@gmail.com",
    pass: "xljtamqdodkuxbzp",
  },
});

exports.createEventUser = (req, res) => {
  const { name, email, phone } = req.body;

  EventUser.findOne({ email })
    .then((existingUser) => {
      if (existingUser) {
        return res
          .status(400)
          .json({ error: "User already registered for this event" });
      }

      const user = new EventUser({ name, email, phone });
      user
        .save()
        .then(() => {
          const mailOptions = {
            from: "mdborhanuddinmajumder058@gmail.com",
            to: email,
            subject: "Event Registration",
            text: `Thank you for registering for the event. Here is the Google Meet link: ${email}`,
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error(error);
              return res.status(500).json({ error: "Failed to send email" });
            }
            res.status(201).json(user);
          });
        })
        .catch((err) =>
          res.status(500).json({ error: "Failed to register user" })
        );
    })
    .catch((err) =>
      res.status(500).json({ error: "Failed to check existing user" })
    );
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
