const Vehicle = require("../models/Vehicle");

const Transaction = require("../models/Transaction");

// Toll Payment
const payToll = async (req, res) => {
  try {

    const {
      vehicleNumber,
      tollAmount,
      tollGate,
    } = req.body;

    // Find vehicle
    const vehicle = await Vehicle.findOne({
      vehicleNumber,
    });

    if (!vehicle) {
      return res.status(404).json({
        message: "Vehicle not found",
      });
    }

    // Check balance
    if (vehicle.walletBalance < tollAmount) {
      return res.status(400).json({
        message: "Insufficient wallet balance",
      });
    }

    // Deduct amount
    vehicle.walletBalance =
      vehicle.walletBalance - tollAmount;

    await vehicle.save();

    // Save transaction
    const transaction =
      await Transaction.create({

        vehicleNumber,

        tollAmount,

        tollGate,

        remainingBalance:
          vehicle.walletBalance,
      });

    res.status(200).json({
      message: "Toll Paid Successfully",

      transaction,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Transactions
const getTransactions = async (req, res) => {
  try {

    const transactions =
      await Transaction.find().sort({
        createdAt: -1,
      });

    res.status(200).json(transactions);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  payToll,
  getTransactions,
};