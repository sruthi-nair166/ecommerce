const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/dbConnection");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userProfileRoutes");
const authRoutes = require("./routes/authenticationRoutes");
const orderRoutes = require("./routes/orderRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const errorHandler = require("./middleware/errorHandler");

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/orders", orderRoutes);
app.use("/analytics", analyticsRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
