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
import Btn from "./Components/Constant/Button";
import MainFooter from "./Components/Footer/MainFooter";
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
      <div className="flex-grow w-full mx-auto mt-2 mb-32 ">
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
      <div className="mb-20 bg-gray-50 mt-36">
        <DebitCard />
      </div>
      <div>
        <Invest />
      </div>
      <div className="flex items-center justify-center mt-1 mb-4 bg-gray-50">
        <Btn
          className="pt-1 mt-4 mb-4"
          btnClassName="bg-yellow-500 text-gray-800 py-2 px-4 rounded-md shadow-md hover:shadow-lg text-xl font-bold"
          name="Explore more campaigns"
        />
      </div>
      <div>
        <MainFooter />
      </div>
    </div>
  ); 
}

export default App;
