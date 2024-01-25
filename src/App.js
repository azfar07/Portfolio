import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Page1/Navbar/Navbar";
import SlideShow from "./Components/Page1/SlideShow/SlideShow";
import myImage from "./Components/assets/imageReact.png";
import CompanyInfo from "./Components/Page1/CompanyInfo/CompanyInfo";
import FeeFree from "./Components/Page1/FeeFree/FeeFree";
import PaidEarly from "./Components/Page1/PaidEarly/PaidEarly";
import MonthlyFees from "./Components/Page1/MonthlyFees/MonthlyFees";
import DebitCard from "./Components/Page1/DebitCard/DebitCard";
import Invest from "./Components/Page1/Invest/Invest";
import Btn from "./Components/Page1/Constant/Button";
import MainFooter from "./Components/Page1/Footer/MainFooter";
import RegisterForm from "./Components/Page2/RegisterForm/RegisterForm";
import MainComp from "./MainComp";
function App() {
  return (
    <Router>
      {/* Define your routes */}
      <Routes>
        {/* Default route (no path specified) */}
        <Route path="/" element={<MainComp />} />
        {/* Route for "/register" */}
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
