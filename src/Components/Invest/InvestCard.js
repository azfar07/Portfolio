import React, { useState, useEffect } from "react";
import { HeartIcon,LocationMarkerIcon } from "@heroicons/react/outline";

function InvestCard(props) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((progressBar) => {
      progressBar.style.width = `${props.progress}%`;
    });
  }, [props.progress]);
  return (
    <div className="w-full p-4 sm:w-1/2 md:w-1/2 xl:w-1/6">
      <div className="relative group">
        {/* Heart Icon */}
        <div
          className="absolute z-10 opacity-0 cursor-pointer top-2 left-2 group-hover:opacity-100"
          onClick={toggleLike}
        >
          <HeartIcon
            className={`h-6 w-6 ${
              isLiked ? "text-red-500" : "text-white"
            } transition-colors duration-300`}
          />
        </div>

        {/* Existing Card Content */}
        <div className="block overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl">
          <div className="relative pb-64 overflow-hidden">
            <img
              className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
              src={props.img}
              alt=""
            />
          </div>
          <div className="p-4">
            <span className="inline-block px-2 py-1 text-xs font-semibold leading-none tracking-wide text-orange-800 uppercase bg-orange-200 rounded-full">
              Highlight
            </span>
            <h2 className="mt-2 mb-2 text-xl font-bold text-center">{props.title}</h2>
            <div className="flex items-center mt-3 ml-20">
              <LocationMarkerIcon className="w-4 h-4 mr-2 text-gray-500 " />
              <p className="text-sm">{props.location}</p>
            </div>
            <p className="text-sm">{props.desc}</p>
            <div className="flex items-center mt-3">
              <span className="text-sm font-semibold">euro</span>&nbsp;
              <span className="text-xl font-bold">{props.price}</span>&nbsp;
              <span className="text-sm font-semibold">{props.currency}</span>
            </div>
            <div className="relative h-3 max-w-xs mx-auto overflow-hidden rounded-full">
              <div className="absolute w-full h-full bg-gray-200"></div>
              <div className="relative w-0 h-full transition-all duration-1000 ease-out rounded-full progress-bar bg-gradient-to-r from-yellow-400 to-yellow-400">
                <div className="absolute inset-0 flex items-center justify-end text-xs font-semibold font-extrabold text-gray-700">
                  80%
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 p-4 text-sm text-gray-600">
            <div className="flex flex-col items-center flex-grow whitespace-nowrap">
              <ul>
                {Object.entries(props.duration).map(([key, value]) => (
                  <li key={key} className="text-xs font-thin text-gray-900">
                    {key}: {value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-end mt-4">
              <span className="font-bold">{props.percent}</span>
              <span className="text-center">{props.ratings}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestCard;
