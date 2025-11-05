import Post from "../models/Post.js";
import Category from "../models/Category.js";

// Get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("category");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single post
export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("category");
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create post
export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update post
export const updatePost = async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete post
export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
