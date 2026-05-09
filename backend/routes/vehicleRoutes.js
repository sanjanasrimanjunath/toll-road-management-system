const express = require("express");

const router = express.Router();

const {
  addVehicle,
  getVehicles,
} = require("../controllers/vehicleController");

// Routes
router.post("/", addVehicle);

router.get("/", getVehicles);

module.exports = router;