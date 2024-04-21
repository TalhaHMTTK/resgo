const express = require("express");
const router = express.Router();

router.post("/Displaycards", async (req, res) => {


    try {
        res.send([global.discards])
        
    } catch (error) {
        console.error(error.message)
        res.send("Server error")
    }
})




module.exports = router;
