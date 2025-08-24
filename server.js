const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const recipeRouter = require("./recipeRouter"); // ✅ adjust path if in folder
const app = express();

// Middleware
app.use(express.json());

// ✅ Root route (fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.send("Recipes API is running 🚀");
});

// ✅ Recipes routes
app.use("/recipes", recipeRouter);

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Port setup (important for Render)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
