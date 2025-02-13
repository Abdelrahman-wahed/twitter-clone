import Header from "./components/Header";
import TimeLine from "./components/TimeLine";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="dark:bg-main-dark md:p-2">
      <div className="container flex dark:text-white text-gray-800  w-[80vw] md:w-screen  ">
        <Header />
        <TimeLine />
        <SideBar />
      </div>
    </div>
  );
}

export default App;
