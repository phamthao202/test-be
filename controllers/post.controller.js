const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");
const Post = require("../models/post");
const getAllPost = catchAsync(async (req, res, next) => {
  const posts = await Post.find();
  return sendResponse(res, 200, true, posts, null, "");
});

const createNewPost = async (req, res, next) => {
  let { author, location, caption, imageUrl } = req.body;
  const post = await Post.create({
    author,
    location,
    caption,
    imageUrl,
  });
  res.json({
    success: true,
    data: post,
    message: "success created a post",
  });
};

module.exports = {
    getAllPost,
  createNewPost,
};
