const express = require("express");
const connectDB = require("./config/db")
const recipeRoutes = require("./router/recipeRouter")

const app = express(); //to create the express application
app.get("/", (req, res) => {
  res.send("Recipes API is running 🚀");
});

require("dotenv").config(); 
const PORT = process.env.PORT;

// connectDB
connectDB();

// middlware when post the data in the request body
app.use(express.json())

app.use("/api/recipes",  recipeRoutes); //routes

app.listen(PORT, () => {
    console.log("server is running at port 5004")
})


