const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    vehicleNumber: {
      type: String,
      required: true,
    },

    tollAmount: {
      type: Number,
      required: true,
    },

    tollGate: {
      type: String,
      required: true,
    },

    remainingBalance: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Transaction",
  transactionSchema
);