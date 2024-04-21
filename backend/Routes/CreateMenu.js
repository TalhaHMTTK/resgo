const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");

router.post("/createMenu", async (req, res) => {
  try {
    await Menu.create({ 
       
        Id:req.body.Id,
        Item: req.body.Item,
        description: req.body.description,
        Price: req.body.Price,
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

