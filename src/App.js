import "./App.css";
import Widgets from "./components/LeftSidebar/widgets";
import Sidebar from "./components/RightSidebar/sidebar";
import Feed from "./components/feed/feed";
import { Routes, Route } from "react-router-dom";
import Notification from "./components/RightSidebar/notification/notification";
import Explore from "./components/RightSidebar/explore/explore";
import Message from "./components/RightSidebar/message/message";
import List from "./components/RightSidebar/list/list";
import Communities from "./components/RightSidebar/communities/communities";
import Profile from "./components/RightSidebar/profile/profile";
import Verified from "./components/RightSidebar/verified/verified";
import MoreDetails from "./components/RightSidebar/moreDetails/moreDetails";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Feed />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/message" element={<Message />} />
        <Route path="/list" element={<List />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/more" element={<MoreDetails />} />
      </Routes>
      <Widgets />
    </div>
  );
}

export default App;
