const express = require("express");
const router = express.Router();

const {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/generation/orderController");

const { verifyToken, isUser } = require("../middleware/authMiddleware");

router.post("/", verifyToken, isUser, createOrder);
router.get("/", verifyToken, isUser, getOrders);
router.put("/:id", verifyToken, isUser, updateOrder);
router.delete("/:id", verifyToken, isUser, deleteOrder);

module.exports = router;
