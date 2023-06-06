const EventUser = require("../models/EventUser");

exports.createEventUser = async (req, res) => {
  try {
    const newEventUser = new EventUser(req.body);
    const result = await newEventUser.save();

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
