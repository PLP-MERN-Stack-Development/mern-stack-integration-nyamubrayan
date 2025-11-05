import { useState } from "react";

const AddPost = ({ onPostAdded }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
     e.preventDefault();
    if (!title || !content) return alert("All fields are required!");

    await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });


    const newPost = { title, content };

    const res = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (res.ok) {
      setTitle("");
      setContent("");
      onPostAdded();
    } else {
      alert("Failed to add post");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white max-w-xl mx-auto mt-6 p-6 rounded-lg shadow-md border"
    >
      <h2 className="text-2xl font-bold text-center mb-5">Add New Post</h2>

      <input
        type="text"
        placeholder="Post title..."
        className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Write content here..."
        className="w-full p-3 h-28 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>

      <button
        type="submit"
        className="w-full p-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        ✅ Add Post
      </button>
    </form>
  );
};

export default AddPost;
