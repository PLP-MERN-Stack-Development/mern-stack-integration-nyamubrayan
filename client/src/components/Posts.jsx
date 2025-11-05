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
  }, [refresh]); // ✅ Refresh whenever a new post is added

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Posts</h2>

      {posts.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {posts.map((post) => (
            <li key={post._id} className="p-3 border rounded shadow">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600">{post.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts yet...</p>
      )}
    </div>
  );
};

export default Posts;
