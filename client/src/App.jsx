import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        MERN Blog
      </h1>

      <div className="max-w-3xl mx-auto space-y-10">
        <AddPost onPostAdded={handleRefresh} />
        <Posts refresh={refresh} />
      </div>
    </div>
  );
}

export default App;
