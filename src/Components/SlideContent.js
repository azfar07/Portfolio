import React from "react";

function SlideContent() {
  return (
    // <div className="absolute top-0 left-0 right-0 text-center text-white p-4">
    //   <h1 className="text-2xl font-bold">Welcome to My Slideshow</h1>
    //   <p className="text-lg mt-4">Discover Beautiful Images</p>
    //   <div className="mt-4">
    //     <input
    //       type="text"
    //       placeholder="Enter your Email..."
    //       className="px-24 py-4 rounded-full bg-white text-left"
    //     />
    //     <button className="cursor-pointer text-base text-black  bg-green-500 hover:text-white rounded-3xl p-3 px-14 transition-all duration-300">
    //       Search
    //     </button>
    //   </div>
    // </div>
    <div className="absolute top-32 left-72 right-0  text-white p-4">
     
      <div className="w-1/2">
          <h1 className="text-7xl font-bold mb-4">Welcome to My Slideshow</h1>
        <input
          type="text"
          placeholder="Search..."
          className="w-96 px-4 py-2 rounded-3xl text-black bg-white text-left focus:outline-none focus:border-gray-300 focus:ring-0"
        />
        <button className="cursor-pointer text-base text-black  bg-green-500 hover:text-white rounded-3xl p-3 px-14 transition-all duration-300 ml-5">
          Search
        </button>
      </div>
       <p className="text-lg mt-4 font-serifs">Already have an account ?</p>
       <p className="text-lg mt-4 font-serifs">learh how we collect and use your information by visiting our Privacy Policy{" >"}  </p>
       <p className="text-lg mt-4 font-serifs">Chime is a financial technology company,not a bank. Banking services provided by The Bancorp Bank,N.A or Stride Bank, N.A : Members FDIC </p>
    </div>
  );
}

export default SlideContent;
