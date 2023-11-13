import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import SlideShow from "./Components/SlideShow/SlideShow";
import myImage from "./Components/assets/imageReact.png";
import CompanyInfo from "./Components/CompanyInfo/CompanyInfo";
import FeeFree from "./Components/FeeFree/FeeFree";
import PaidEarly from "./Components/PaidEarly/PaidEarly";
import MonthlyFees from "./Components/MonthlyFees/MonthlyFees";
import DebitCard from "./Components/DebitCard/DebitCard";
import Invest from "./Components/Invest/Invest";
import InvestCard from "./Components/Invest/InvestCard";
function App() {
  return (
    <div className="flex flex-col justify-center min-h-full pl-4 pr-4 min-w-fit">
      <Navbar />
      <div className="flex-grow w-full mx-auto h-max">
        <SlideShow />
      </div>
      <div className="w-full mb-32 mt-36">
        <img src={myImage} alt="Image Alt Text" className="w-full" />
      </div>
      <div className="flex-grow w-full mx-auto mb-32 h-max mt-36">
        <CompanyInfo />
      </div>
      <div>
        <FeeFree />
      </div>
      <div className="bg-gray-50">
        <PaidEarly />
      </div>
      <div className="flex-grow w-full mx-auto mb-20 mt-36 h-max">
        <MonthlyFees />
      </div>
      <div className="mb-32 bg-gray-50 mt-36">
        <DebitCard />
      </div>
      <div >
       <Invest />
      </div>
    </div>
  );
}

export default App;
