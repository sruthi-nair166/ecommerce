const Product = require("../../models/product");

const getRecommendations = async (req, res) => {
  try {
    const { category } = req.query;

    let baseQuery = category ? { category } : {};

    let products = await Product.find(baseQuery);

    products = products.sort(() => Math.random() - 0.5).slice(0, 4);

    res.json({
      message: "Recommendations generated",
      recommendations: products,
    });
  } catch (error) {
    res.status(500).json({ message: "Error generating recommendations" });
  }
};

module.exports = { getRecommendations };
