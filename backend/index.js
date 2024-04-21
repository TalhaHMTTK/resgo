const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");


app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"); // Corrected typo in header name
  next(); // Added next() to continue to the next middleware
});
mongoDB();

app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/LoginUser"));
app.use('/api',require("./Routes/Displaycards"));
app.use('/api',require("./Routes/DisplayDiscounts"));
app.use('/api',require("./Routes/CreateMenu"));
app.use('/api',require("./Routes/CreateDiscounts"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
