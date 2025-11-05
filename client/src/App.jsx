import { useState } from "react";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";


function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        MERN Blog
      </h1>

      <AddPost onPostAdded={() => setRefresh(!refresh)} />

      <div className="border-t mt-10 pt-8">
        <Posts refresh={refresh} />
      </div>
    </div>
  );
}


export default App;
