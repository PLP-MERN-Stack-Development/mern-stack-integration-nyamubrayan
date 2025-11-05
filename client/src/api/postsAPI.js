const API_URL = "http://localhost:5000/api/posts";

export const getPosts = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};
