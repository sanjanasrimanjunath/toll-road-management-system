const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const tollRoutes = require("./routes/tollRoutes");
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

// Test Route
app.get("/test", (req, res) => {
  res.send("Test Route Working");
});

// Auth Routes
app.use("/api/auth", authRoutes);

// Vehicle Routes
app.use("/api/vehicles", vehicleRoutes);

//Toll Routes
app.use("/api/toll", tollRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});