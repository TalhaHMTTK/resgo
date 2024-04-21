const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://Resgo:30179896@cluster0.wsjqov5.mongodb.net/Resgo?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Access the "discards" collection
    const discardsData = await mongoose.connection.db.collection("discards").find({}).toArray();
    global.discards = discardsData;

    // Access the "discounts" collection
    const discountsData = await mongoose.connection.db.collection("discounts").find({}).toArray();
    global.discounts = discountsData;

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongoDB;
