const express = require("express");
const router = express.Router();

const {
  getRecommendations,
} = require("../controllers/tracking/analyticsController");

router.get("/recommend", getRecommendations);

module.exports = router;
