const Visitor = require("../models/Visitor");
const geoip = require("geoip-lite");
const axios = require("axios");

exports.saveVisitor = async (req, res, next) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log(ip);
  //   const geo = geoip.lookup(ip);
  //   console.log(geo);
  //   const cleanIP = ip.replace(/^.*:/, "");
  //   console.log(cleanIP);
  //   const response = await axios.get(
  //     `http://api.ipstack.com/${ip}?access_key=e6ce541e47dec170e61a0a3c0307c49e`
  //   );
  const response = await axios.get(`http://ip-api.com/json/${ip}`);
  console.log(response);
  //   const { isp, country_name: country, city } = response.data;
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
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get data",
      error: error.message,
    });
  }
};
