import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import SlideShow from "./Components/SlideShow";
import myImage from './Components/assets/imageReact.png';
import CompanyInfo from "./Components/CompanyInfo";
function App() {
  return (
    <div className="min-h-full flex flex-col justify-center min-w-fit pl-4 pr-4">
      <Navbar />
      <div className="flex-grow w-full mx-auto">
        <SlideShow />
      </div>
      <div className="image-container">
        <img
          src={myImage}
          // alt={`Slide ${index + 1}`}
          className="mt-80 "
        />
      </div>
      <div>
        <CompanyInfo />
      </div>
    </div>
  );
}

export default App;
