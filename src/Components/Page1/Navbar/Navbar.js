import React from "react";
import { useNavigate,Link } from "react-router-dom";
function Navbar() {
  const menuItems = [
    { name: "Benefits", color: "text-red-600" },
    { name: "Accounts", color: "text-green-500" },
    { name: "Who we are", color: "text-green-500" },
    { name: "Learn", color: "text-green-500" },
  ];
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    // Navigate to the '/Register' route
    navigate("/register");
  };
  return (
    <div>
      <nav className="flex justify-between font-normal text-black bg-white md:font-bold">
        <ul className="flex justify-start py-4 px-28 space-x-11">
          <li className="text-green-500 cursor-pointer font-extrabold">
            Chime
          </li>
          <li
            className={`cursor-pointer text-base text-black transition-colors duration-300 ease-in-out hover:text-green-500 font-bold`}
          >
            Benefits
          </li>
          <li
            className={`cursor-pointer text-base text-black transition-colors duration-300 ease-in-out hover:text-green-500 font-bold`}
          >
            Accounts
          </li>
          <li
            className={`cursor-pointer text-base text-black transition-colors duration-300 ease-in-out hover:text-green-500 font-bold`}
          >
            Who we are
          </li>
          <li
            className={`cursor-pointer text-base text-black transition-colors duration-300 ease-in-out hover:text-green-500 font-bold`}
          >
            Learn
          </li>
        </ul>

        <ul className="flex justify-end py-1 px-28">
          <li
            className="p-3 text-base text-black transition-all duration-300 bg-transparent cursor-pointer hover:bg-green-500 hover:text-white rounded-3xl px-14 font-bold"
            onClick={handleSignUpClick}
          >
            <Link to="/register" className="your-styles-here">
              Sign Up
            </Link>
          </li>
          <li className="p-3 text-base text-black transition-all duration-300 bg-transparent cursor-pointer hover:bg-green-500 hover:text-white rounded-3xl px-14 font-bold">
            Login
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

// const menuItems = [
//   { name: "Benefits", color: "text-red-600" },
//   { name: "Accounts", color: "text-green-500" },
//   { name: "Who we are", color: "text-green-500" },
//   { name: "Learn", color: "text-green-500" },
// ];
{
  /* {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className={`cursor-pointer text-base text-black hover:${menuItem.color} transition-colors duration-300 ease-in-out group-hover:opacity-75`}
            >
              {menuItem.name}
            </li>
            
          ))}
           */
}
// {menuItems.map((menuItem, index) => (
//   <li
//     key={index}
//     className={`cursor-pointer text-base text-black transition-colors duration-300 ease-in-out group-hover:${menuItem.color} hover:${menuItem.color} group-hover:opacity-75`}
//   >
//     {menuItem.name}
//   </li>
// ))}
