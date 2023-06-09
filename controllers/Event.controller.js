const Event = require("../models/Event");
const fs = require("fs");

exports.createEvent = async (req, res) => {
  try {
    const saveEvent = new Event({
      title: req.body.title,
      dateTime: req.body.dateTime,
      region: req.body.region,
      district: req.body.district,
      brand: req.body.brand,
      status: req.body.status,
      gmeet: req.body.gmeet,
      desc: req.body.desc,
      capacity: req.body.capacity,
      image: req.file.path,
    });
    const result = await saveEvent.save();

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

exports.getEvent = async (req, res) => {
  try {
    const result = await Event.find({});

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

exports.getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Event.findOne({ _id: id });

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

exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Event.findOneAndDelete({ _id: id });

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

exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await Event.updateOne({ _id: id }, body);

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
