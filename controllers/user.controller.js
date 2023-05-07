const Users = require("../models/User");
exports.postUser = async (req, res, next) => {
  try {
    const users = new Users(req.body);
    const result = await users.save();

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
