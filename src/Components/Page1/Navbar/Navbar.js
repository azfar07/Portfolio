import React from "react";

function Navbar() {

 const menuItems = [
    { name: "Benefits", color: "text-red-600" },
    { name: "Accounts", color: "text-green-500" },
    { name: "Who we are", color: "text-green-500" },
    { name: "Learn", color: "text-green-500" },
  ];
 
  return (
    <div>
      <nav className="flex justify-between font-normal text-black bg-white md:font-bold">
        <ul className="flex justify-start py-4 group px-28 space-x-11">
          <li className="text-green-500 cursor-pointer">Chime</li>
            {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className={`cursor-pointer text-base text-black hover:${menuItem.color} transition-colors duration-300 ease-in-out group-hover:opacity-75`}
            >
              {menuItem.name}
            </li>
            
          ))}
          
        
        </ul>
        <ul className="flex justify-end py-1  group px-28">
          <li className="p-3 text-base text-black transition-all duration-300 bg-transparent cursor-pointer hover:bg-green-500 hover:text-white rounded-3xl px-14">
            Sign Up
          </li>
          <li className="p-3 text-base text-black transition-all duration-300 bg-transparent cursor-pointer hover:bg-green-500 hover:text-white rounded-3xl px-14">
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
  {/* {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className={`cursor-pointer text-base text-black hover:${menuItem.color} transition-colors duration-300 ease-in-out group-hover:opacity-75`}
            >
              {menuItem.name}
            </li>
            
          ))}
           */}