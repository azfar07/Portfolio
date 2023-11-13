import React, { useState } from "react";
import { HeartIcon } from '@heroicons/react/outline';

function InvestCard(props) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

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
              isLiked ? 'text-red-500' : 'text-white'
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
            <h2 className="mt-2 mb-2 font-bold">{props.title}</h2>
            <p className="text-sm">{props.desc}</p>
            <div className="flex items-center mt-3">
              <span className="text-sm font-semibold">ab</span>&nbsp;
              <span className="text-xl font-bold">{props.price}</span>&nbsp;
              <span className="text-sm font-semibold">{props.currency}</span>
            </div>
          </div>
          <div className="p-4 text-xs text-gray-700 border-t border-b">
            <span className="flex items-center mb-1">
              <i className="mr-2 text-gray-900 far fa-clock fa-fw"></i>{" "}
              {props.duration}
            </span>
            <span className="flex items-center">
              <i className="mr-2 text-gray-900 far fa-address-card fa-fw"></i>{" "}
              {props.discount}
            </span>
          </div>
          <div className="flex items-center p-4 text-sm text-gray-600">
            {[...Array(props.ratings)].map((_, index) => (
              <svg
                key={index}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-yellow-500 fill-current"
              >
                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
              </svg>
            ))}
            <span className="ml-2">{props.ratings} Bewertungen</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestCard;