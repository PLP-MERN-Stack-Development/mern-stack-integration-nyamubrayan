import { useEffect, useState } from "react";

const Posts = ({ refresh }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, [refresh]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Recent Posts</h2>

      {posts.length === 0 ? (
        <p className="text-center text-gray-600">
          No posts yet...
        </p>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg">{post.title}</h3>
              <p className="text-gray-700 mt-2">{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
