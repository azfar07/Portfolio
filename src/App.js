import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import SlideShow from "./Components/SlideShow";
import myImage from './Components/assets/imageReact.png';
import CompanyInfo from "./Components/CompanyInfo";
function App() {
  return (
    <div className="flex flex-col justify-center min-h-full pl-4 pr-4 min-w-fit">
      <Navbar />
      <div className="flex-grow w-full mx-auto h-max">
        <SlideShow />
      </div>
      <div className="w-full mt-80"> 
        <img src={myImage} alt="Image Alt Text" className="w-full" /> 
      </div>
      <div className="flex-grow w-full mx-auto h-max">
        <CompanyInfo />
      </div>
      <div className="flex-grow w-full mx-auto h-max">
        {/* <CompanyInfo /> */}
      </div>
    </div>
  );
}

export default App;
