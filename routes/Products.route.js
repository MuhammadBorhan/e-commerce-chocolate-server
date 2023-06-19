const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

const multer = require("multer");
const authorization = require("../middleware/authorization");
const verifyToken = require("../middleware/verifyToken");
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
  .route("/products")
  .get(productsController.getProducts)
  .post(
    verifyToken,
    authorization("admin"),
    upload.single("image"),
    productsController.createProduct
  );

router.route("/product").get(productsController.getProductByBrand);

router
  .route("/products/:id")
  .get(productsController.getProductById)
  .patch(
    verifyToken,
    authorization("admin"),
    upload.single("image"),
    productsController.updateProduct
  )
  .delete(
    verifyToken,
    authorization("admin"),
    productsController.deleteProduct
  );

module.exports = router;
