import "./App.css";
import Widgets from "./components/LeftSidebar/widgets";
import Sidebar from "./components/RightSidebar/sidebar";
import Feed from "./components/feed/feed";
// import Notification from "./components/RightSidebar/notification/notification";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/RightSidebar/home/home";

function App() {
  return (
    <div className="app">
      <Sidebar />
      {/* <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/notification" Component={Notification} />
        </Routes> */}
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
