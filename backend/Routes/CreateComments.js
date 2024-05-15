const express = require("express");
const router = express.Router();
const Comment = require("../models/comments");

router.post("/createcomments", async (req, res) => {
  try {
    await Comment.create({ 
        Postid: req.body.Postid,
        name: req.body.name,
        post: req.body.post, 
    });
    res.json({ success: true });
    
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.json({ success: false, error: error.message }); // Return the error message in the response
  }
});

module.exports = router;
