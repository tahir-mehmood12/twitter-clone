import "./App.css";
import Widgets from "./components/LeftSidebar/widgets";
import Sidebar from "./components/RightSidebar/sidebar";
import Feed from "./components/feed/feed";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
