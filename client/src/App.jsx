import { useState } from "react";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center my-6">MERN Blog</h1>

      {/* Add Post Form */}
      <AddPost onPostAdded={handleRefresh} />

      {/* Posts List */}
      <Posts refresh={refresh} />
    </div>
  );
}

export default App;
