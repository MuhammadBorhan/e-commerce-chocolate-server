const Visitor = require("../models/Visitor");
const geoip = require("geoip-lite");
const axios = require("axios");

exports.saveVisitor = async (req, res, next) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const response = await axios.get(`http://ip-api.com/json/${ip}`);
  const { isp, country, city } = response.data;
  const visitor = new Visitor({ ip, isp, country, city });
  visitor
    .save()
    .then(() => res.sendStatus(200))
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

exports.getVisitors = async (req, res) => {
  try {
    const result = await Visitor.find({});

    res.status(200).json({
      status: "Success",
      data: result,
      // data: dp,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get data",
      error: error.message,
    });
  }
};

exports.getVisitorss = async (req, res) => {
  try {
    // const dp = await Visitor.distinct("city");
    const result = await Visitor.find({}).distinct("ip");
    result?.filter((ip) => ip);

    res.status(200).json({
      status: "Success",
      data: result,
      // data: dp,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get data",
      error: error.message,
    });
  }
};
