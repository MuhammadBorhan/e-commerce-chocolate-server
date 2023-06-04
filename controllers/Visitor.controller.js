const Visitor = require("../models/Visitor");
const geoip = require("geoip-lite");
const axios = require("axios");

exports.saveVisitor = async (req, res, next) => {
  const response = await axios.get(`http://ip-api.com/json/`);
  //   console.log(response);
  const { isp, country, city, query } = response.data;

  const visitor = new Visitor({ ip: query, isp, country, city });
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
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get data",
      error: error.message,
    });
  }
};
