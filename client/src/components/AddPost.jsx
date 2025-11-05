import { useState } from "react";

const AddPost = ({ onPostAdded }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      onPostAdded(); // Notify parent component to refresh posts
      alert("✅ Post added successfully! Refresh to see it.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 mt-4 border rounded shadow"
    >
      <h2 className="text-xl font-semibold mb-3">Add a New Post</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border rounded mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Content"
        className="w-full p-2 border rounded mb-3"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>

      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
