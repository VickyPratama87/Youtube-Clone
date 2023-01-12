import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Shorts from "./components/Shorts";
import Sidebar from "./components/Sidebar";
import Topics from "./components/Topics";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="">
          <Topics />
          <Content />
          <Shorts />
        </div>
      </div>
    </div>
  );
}

export default App;
