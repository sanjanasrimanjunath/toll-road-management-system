const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    ownerName: {
      type: String,
      required: true,
    },

    vehicleNumber: {
      type: String,
      required: true,
      unique: true,
    },

    vehicleType: {
      type: String,
      required: true,
    },

    walletBalance: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Vehicle",
  vehicleSchema
);