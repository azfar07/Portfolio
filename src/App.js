import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import SlideShow from "./Components/SlideShow";

function App() {
  return (
    <div className="min-h-full flex flex-col justify-center min-w-fit pl-4 pr-4">
      <Navbar />
      <div className="flex-grow w-full mx-auto">
        <SlideShow />
      </div>
    </div>
  );
}

export default App;
