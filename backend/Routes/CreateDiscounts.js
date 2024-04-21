const express = require("express");
const router = express.Router();
const Discount = require("../models/Discount");

router.post("/createDiscount", async (req, res) => {
  try {
    await Discount.create({ 
       
        Id:req.body.Id,
        Resname: req.body.Resname,
        description: req.body.description,
        Discount: req.body.Discount,
        ImageLink: req.body.ImageLink, 
    });
    res.json({ success: true });
    
  }
   catch (error) {
    console.log(error);
    res.json({ success: false }); 
  }
});

module.exports = router;

