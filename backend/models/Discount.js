const mongoose = require("mongoose");

const { Schema } = mongoose;

const DiscountSchema = new Schema({
  Id: {
    type: String,
    required: true,
  },
  Resname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Discount: {
    type: String,
    required: true,
  },
  ImageLink: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Discount', DiscountSchema); 