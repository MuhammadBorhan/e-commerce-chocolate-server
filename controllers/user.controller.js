const Users = require("../models/User");
const { generateToken } = require("../utils/token");

exports.postUser = async (req, res, next) => {
  try {
    const users = new Users(req.body);
    const result = await users.save();

    const token = generateToken(users);

    res.status(200).json({
      status: "Success",
      message: "Data inserted successfully!",
      data: result,
      token,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.loginPost = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        error: "Please provide your credentials",
      });
    }

    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(401).json({
        status: "fail",
        error: " User not found. Please create an account first",
      });
    }

    const isPasswordValid = user.password;
    if (isPasswordValid !== password) {
      return res.status(403).json({
        status: "fail",
        error: "Password is not correct",
      });
    }

    const token = generateToken(user);

    // const { password: pwd, confirmPassword: cpwd, ...others } = user.toObject();
    const result = user;

    res.status(200).json({
      status: "Success",
      message: "Successfully logged in",
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    const email = req.user?.email;
    const user = await Users.findOne({ email });
    res.status(200).json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    res.status(200).json({
      status: "Success",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.deleteOne({ _id: id });

    if (!result.deletedCount) {
      return res.status(400).json({
        status: "fail",
        message: "Couldn't delete the data",
        error: error.message,
      });
    }
    res.status(200).json({
      status: "Successfully delete",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't delete the data",
      error: error.message,
    });
  }
};
