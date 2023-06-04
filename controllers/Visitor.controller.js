const Visitor = require("../models/Visitor");
const geoip = require("geoip-lite");

exports.saveVisitor = async (req, res, next) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip);

    const visitor = new Visitor({
      ip: ip,
      isp: req.headers["isp"],
      country: geo ? geo.country : "Unknown",
      city: geo ? geo.city : "Unknown",
    });

    const result = await visitor.save();

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

exports.getVisitors = async (req, res) => {
  try {
    const result = await Visitor.find({});

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
