const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/generation/productController");

const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

router.get("/", getProducts);

router.post("/", verifyToken, isAdmin, createProduct);
router.put("/:id", verifyToken, isAdmin, updateProduct);
router.delete("/:id", verifyToken, isAdmin, deleteProduct);

module.exports = router;
