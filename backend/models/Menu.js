const mongoose = require("mongoose");

const { Schema } = mongoose;

const MenuSchema = new Schema({
  Id: {
    type: String,
    required: true,
  },
  Item: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
  ImageLink: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Menu', MenuSchema); 