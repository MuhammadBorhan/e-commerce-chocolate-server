const GiftBox = require("../models/GiftBox");
const fs = require("fs");

exports.createGiftBox = async (req, res) => {
  try {
    // const saveGiftBox = new GiftBox(req.body);
    if (!req.file) {
      const saveGiftBox = new GiftBox({
        name: req.body.name,
        price: req.body.price,
        desc: req.body.desc,
        brand: req.body.brand,
        productList: req.body.productList,
      });
      const result = await saveGiftBox.save();

      res.status(200).json({
        status: "Success",
        message: "Data inserted successfully!",
        data: result,
      });
    } else {
      const saveGiftBox = new GiftBox({
        name: req.body.name,
        price: req.body.price,
        festival: req.body.festival,
        desc: req.body.desc,
        brand: req.body.brand,
        productList: req.body.productList,
        image: req.file.path,
      });
      const result = await saveGiftBox.save();

      res.status(200).json({
        status: "Success",
        message: "Data inserted successfully!",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.getGiftBox = async (req, res) => {
  try {
    const result = await GiftBox.find({});

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

exports.getGiftBoxById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await GiftBox.findOne({ _id: id });

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

exports.deleteGiftBox = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await GiftBox.findOneAndDelete({ _id: id });

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

exports.updateGiftBox = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.file) {
      const body = req.body;
      const image = req.file.path;
      const result = await GiftBox.updateOne({ _id: id }, { ...body, image });

      res.status(200).json({
        status: "Successfully Update",
        data: result,
      });
    } else {
      const body = req.body;
      const result = await GiftBox.updateOne({ _id: id }, body);

      res.status(200).json({
        status: "Successfully Update",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't update data",
      error: error.message,
    });
  }
};

// select gift box
exports.selectGiftBox = async (req, res) => {
  try {
    const result = await GiftBox.find({ isEnabled: true });

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

exports.updateSelectGiftBox = async (req, res) => {
  try {
    const { id } = req.params;
    const { isEnabled } = req.body;
    const result = await GiftBox.findByIdAndUpdate(id, { isEnabled });

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
