const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema({
  Postid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Comment', CommentSchema); 