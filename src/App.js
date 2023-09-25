import "./App.css";
import Widgets from "./components/LeftSidebar/widgets";
import Sidebar from "./components/RightSidebar/sidebar";
import Feed from "./components/feed/feed";
import { Routes, Route } from "react-router-dom";
import Notification from "./components/RightSidebar/notification/notification";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Feed />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
      <Widgets />
    </div>
  );
}

export default App;
