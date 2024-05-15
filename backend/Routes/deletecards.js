const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Import your Mongoose models here
const Discount = require("../models/Discount");
const Menu = require("../models/Menu");

router.post("/deletecard", async (req, res) => {
  const { id } = req.body;
  try {
    // Assuming Discount is your Mongoose model for discounts
    const discountResult = await Discount.deleteOne({ _id: id });
    if (discountResult.deletedCount === 1) {
      res.json({ success: true, message: "Discount deleted successfully" });
    } else {
      // Check if not found in discounts, then check in menu
      const menuResult = await Menu.deleteOne({ _id: id });
      if (menuResult.deletedCount === 1) {
        res.json({ success: true, message: "Menu item deleted successfully" });
      } else {
        res.status(404).json({ success: false, message: "Item not found" });
      }
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
