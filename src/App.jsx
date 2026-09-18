import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Categories from "./components/Categories";
import VideoGrid from "./components/VideoGrid";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <div className="page-layout">
        <Sidebar />

        <main className="main-content">
          <Categories />
          <VideoGrid />
        </main>
      </div>
    </div>
  );
}

export default App;