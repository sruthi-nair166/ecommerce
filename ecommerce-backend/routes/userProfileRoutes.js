const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getProfile,
  updateProfile,
} = require("../controllers/generation/userProfile");

const {
  verifyToken,
  isAdmin,
  isUser,
} = require("../middleware/authMiddleware");

router.get("/profile", verifyToken, getProfile);
router.put("/profile", verifyToken, updateProfile);
router.delete("/profile", verifyToken, deleteUser);

router.get("/", verifyToken, isAdmin, getUsers);
router.delete("/:id", verifyToken, isAdmin, deleteUser);

router.post("/", verifyToken, isUser, createUser);
router.put("/:id", verifyToken, isUser, updateUser);

module.exports = router;
