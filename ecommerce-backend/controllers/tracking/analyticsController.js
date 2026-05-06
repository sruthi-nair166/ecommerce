const Product = require("../../models/product");

const getRecommendations = async (req, res) => {
  try {
    const { category } = req.query;

    let recommendations;

    if (category) {
      recommendations = await Product.find({ category });
    } else {
      recommendations = await Product.find();

      recommendations = recommendations.sort(() => 0.5 - Math.random());
    }

    res.json({
      message: "Recommendations generated",
      recommendations,
    });
  } catch (error) {
    res.status(500).json({ message: "Error generating recommendations" });
  }
};

module.exports = { getRecommendations };
