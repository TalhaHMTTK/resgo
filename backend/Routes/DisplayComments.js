const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://Resgo:30179896@cluster0.wsjqov5.mongodb.net/Resgo?retryWrites=true&w=majority&appName=Cluster0";

router.post("/DisplayComments", async (req, res) => {
    try {
        const commentsData = await mongoose.connection.db.collection("comments").find({}).toArray();
        res.json(commentsData);
    } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;