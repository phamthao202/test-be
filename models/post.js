const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  author: {
    username: String,
    avatarUrl: String,
  },
  location: String,
  caption: String,
  //   createdAt:Date,
  //   likeCount: Number,
  imageUrl: String,
});

const Post = mongoose.model("Post", schema);
module.exports = Post;
