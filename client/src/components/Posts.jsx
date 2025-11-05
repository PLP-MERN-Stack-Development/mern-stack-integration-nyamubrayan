import { useEffect, useState } from "react";

const Posts = ({ refresh }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [refresh]);

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
              <h3 className="font-semibold text-lg text-gray-900">{post.title}</h3>
              <p className="text-gray-700 mt-2">{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
