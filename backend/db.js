const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://Resgo:30179896@cluster0.wsjqov5.mongodb.net/Resgo?retryWrites=true&w=majority&appName=Cluster0";
//const mongoURI ="mongodb+srv://talha:talha123@cluster0.bowvcyj.mongodb.net/talha?retryWrites=true&w=majority&appName=Cluster0"
const connectToMongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Access the "menus" collection
    const menusData = await mongoose.connection.db.collection("menus").find({}).toArray();
    global.menus = menusData;

    // Access the "discounts" collection
    const discountsData = await mongoose.connection.db.collection("discounts").find({}).toArray();
    global.discounts = discountsData;


      // Access the "comments" collection
      const commentsData = await mongoose.connection.db.collection("comments").find({}).toArray();
      global.comments = commentsData;

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongoDB;
