const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const jwtSecret = "jkacasncasklclcjzcmsaocmac";

router.post("/loginuser", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: "User not found" });
    }

    if (password !== user.password) {
      return res.status(400).json({ errors: "Invalid credentials" });
    } else {
      console.log("User ID:", user._id); // Print user id on console
      const payload = {
        user: {
          id: user._id
        }
      };
      const authToken = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
      return res.json({ success: true, authToken, userId: user._id }); // Sending user id along with authToken
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
