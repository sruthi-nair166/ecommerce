const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/generation/userProfile");

const {
  verifyToken,
  isAdmin,
  isUser,
} = require("../middleware/authMiddleware");

router.get("/", verifyToken, isAdmin, getUsers);
router.delete("/:id", verifyToken, isAdmin, deleteUser);

router.post("/", verifyToken, isUser, createUser);
router.put("/:id", verifyToken, isUser, updateUser);

module.exports = router;
