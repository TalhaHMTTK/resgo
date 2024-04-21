const express = require("express");
const router = express.Router();

router.post("/DisplayDiscounts", async (req, res) => {
    try {
        res.send([global.discounts])
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
