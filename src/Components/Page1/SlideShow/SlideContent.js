import React from "react";

function SlideContent() {
  return (
    <div className="absolute right-0 p-4 text-white top-32 left-72">
      <div className="w-1/2">
        <h1 className="mb-4 font-bold text-7xl">Welcome to My Slideshow</h1>
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 text-left text-black bg-white w-96 rounded-3xl focus:outline-none focus:border-gray-300 focus:ring-0"
        />
        <button className="p-3 ml-5 text-base text-black transition-all duration-300 bg-green-500 cursor-pointer hover:text-white rounded-3xl px-14">
          Search
        </button>
      </div>
      <p className="mt-4 font-serif text-lg">Already have an account?</p>
      <p className="mt-4 font-serif text-lg">
        Learn how we collect and use your information by visiting our Privacy
        Policy {" > "}
      </p>
      <p className="mt-4 font-serif text-lg">
        Chime is a financial technology company, not a bank. Banking services
        provided by The Bancorp Bank, N.A or Stride Bank, N.A : Members FDIC
      </p>
    </div>
  );
}
export default SlideContent;
