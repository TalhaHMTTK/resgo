const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://Resgo:30179896@cluster0.wsjqov5.mongodb.net/Resgo?retryWrites=true&w=majority&appName=Cluster0";

router.post("/DisplayMenu", async (req, res) => {
    try {
        const menusData = await mongoose.connection.db.collection("menus").find({}).toArray();
        res.send([menusData])
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;