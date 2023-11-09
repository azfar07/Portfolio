import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import SlideShow from "./Components/SlideShow";
import myImage from './Components/assets/imageReact.png';
import CompanyInfo from "./Components/CompanyInfo";
import FeeFree from "./Components/FeeFree";
import PaidEarly from "./Components/PaidEarly";
import MonthlyFees from "./Components/MonthlyFees";
import DebitCard from "./Components/DebitCard";
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
      <div>
        <FeeFree />
      </div>
      <div className="bg-gray-50">
        <PaidEarly />
      </div>
      <div>
        <MonthlyFees />
      </div>
      <div className="bg-gray-50">
        <DebitCard />
      </div>
    </div>
  );
}

export default App;
