const Product = require("../../models/product");

const getProducts = async (req, res) => {
  try {
    const { name, category, price, sort } = req.query;

    let query = {};

    if (name) {
      query.name = { $regex: name, $options: "i" };
    }

    if (category) {
      query.category = category;
    }

    if (price) {
      query.price = { $lte: Number(price) };
    }

    let products = Product.find(query);

    if (sort === "price_asc") {
      products = products.sort({ price: 1 });
    }

    if (sort === "price_desc") {
      products = products.sort({ price: -1 });
    }

    const result = await products;
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    if (!req.body.name || !req.body.price) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!product) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
