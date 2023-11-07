import React from "react";

function Navbar() {
  const menuItems = [
    { name: "Benefits", color: "text-green-500" },
    { name: "Accounts", color: "text-green-500" },
    { name: "Who we are", color: "text-green-500" },
    { name: "Learn", color: "text-green-500" },
  ];
  return (
    <div>
      <nav className="bg-white text-black font-normal md:font-bold flex justify-between">
        <ul className="group px-28 py-4 space-x-11 justify-start flex">
          <li className="cursor-pointer text-green-500">Chime</li>
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className={`cursor-pointer text-base text-black hover:${menuItem.color} transition-colors duration-300 ease-in-out group-hover:opacity-75`}
            >
              {menuItem.name}
            </li>
          ))}
          
        </ul>
        <ul className=" group px-28 py-1 justify-end flex">
            <li className="cursor-pointer text-base text-black bg-transparent hover:bg-green-500 hover:text-white rounded-3xl p-3 px-14 transition-all duration-300">
              Sign Up
            </li>
            <li className="cursor-pointer text-base text-black bg-transparent hover:bg-green-500 hover:text-white rounded-3xl p-3 px-14 transition-all duration-300">
            Login
            </li>
          </ul>
      </nav>
    </div>
  );
}

export default Navbar;
