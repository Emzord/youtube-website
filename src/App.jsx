import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Categories from "./components/Categories";
import VideoGrid from "./components/VideoGrid";
import "./App.css";

function App() {

const [sidebarOpen, setSidebarOpen] = useState(false);

 return (
    <div>
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="page-layout">
    <Sidebar sidebarOpen={sidebarOpen} />

        <main className="main-content">
          <Categories />
          <VideoGrid />
        </main>
      </div>
    </div>
  );
}

export default App;