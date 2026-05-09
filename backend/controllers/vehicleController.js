const Vehicle = require("../models/Vehicle");

// Add Vehicle
const addVehicle = async (req, res) => {
  try {

    const {
      ownerName,
      vehicleNumber,
      vehicleType,
      walletBalance,
    } = req.body;

    // Check existing vehicle
    const vehicleExists = await Vehicle.findOne({
      vehicleNumber,
    });

    if (vehicleExists) {
      return res.status(400).json({
        message: "Vehicle already exists",
      });
    }

    const vehicle = await Vehicle.create({
      ownerName,
      vehicleNumber,
      vehicleType,
      walletBalance,
    });

    res.status(201).json({
      message: "Vehicle Added Successfully",
      vehicle,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Vehicles
const getVehicles = async (req, res) => {
  try {

    const vehicles = await Vehicle.find();

    res.status(200).json(vehicles);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addVehicle,
  getVehicles,
};