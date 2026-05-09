const express = require("express");

const router = express.Router();

const {
  payToll,
  getTransactions,
} = require("../controllers/tollController");

router.post("/pay", payToll);

router.get("/transactions", getTransactions);

module.exports = router;