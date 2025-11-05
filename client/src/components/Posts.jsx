import { useEffect, useState } from "react";

const Posts = ({ refresh }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [refresh]);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/posts/${id}`, {
      method: "DELETE",
    });

    setPosts(posts.filter((p) => p._id !== id));
  };

  const handleUpdate = async (id, newTitle, newContent) => {
    await fetch(`http://localhost:5000/api/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle, content: newContent }),
    });

    setPosts(
      posts.map((p) =>
        p._id === id ? { ...p, title: newTitle, content: newContent } : p
      )
    );
  };

  const handleEdit = (post) => {
    const newTitle = prompt("Edit Title:", post.title);
    const newContent = prompt("Edit Content:", post.content);

    if (newTitle && newContent) {
      handleUpdate(post._id, newTitle, newContent);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Recent Posts</h2>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No blog posts yet...</p>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg text-gray-900">
                {post.title}
              </h3>
              <p className="text-gray-700 mt-2">{post.content}</p>

              <div className="flex gap-2 mt-4">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                  onClick={() => handleDelete(post._id)}
                >
                  Delete
                </button>

                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
                  onClick={() => handleEdit(post)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
