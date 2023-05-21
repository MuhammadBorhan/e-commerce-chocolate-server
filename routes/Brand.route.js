const express = require("express");
const router = express.Router();
const brandController = require("../controllers/Brands.controller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router
  .route("/brand")
  .get(brandController.getBrands)
  .post(
    upload.fields([
      { name: "image", maxCount: 1 },
      { name: "logo", maxCount: 1 },
    ]),
    brandController.createBrand
  );

router
  .route("/brand/:id")
  .get(brandController.getBrandById)
  .patch(brandController.updateBrandById)
  .delete(brandController.deleteBrandById);

module.exports = router;
