import React, { useEffect, useState } from "react";
import SlideContent from "./SlideContent";
import img1 from "./../assets/istockphoto-1165045378-1024x1024.jpg"
import img2 from "./../assets/istockphoto-1212778161-1024x1024.jpg"
import img3 from "./../assets/istockphoto-1278838508-1024x1024.jpg"
import img4 from "./../assets/istockphoto-1310904689-1024x1024.jpg"
import img5 from "./../assets/istockphoto-511785712-1024x1024.jpg"
import img6 from "./../assets/istockphoto-902871342-1024x1024.jpg"
import img7 from "./../assets/istockphoto-902871382-1024x1024.jpg"
import img8 from "./../assets/new-england-village-in-fall-1683762.jpg"
function SlideShow() {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // debugger
    // const apiKey = "40531442-e351c9d5bd30fac7635018e88"; // Your Pixabay API key
    // const apiUrl = `https://pixabay.com/api/?key=40531442-e351c9d5bd30fac7635018e88&q=yellow+flowers&image_type=photo&pretty=true`;

    // fetch(apiUrl)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // debugger
    //     console.log('data===>',data)
    //     setImages(data.hits.map((photo) => photo.webformatURL));
    //   });
    const localImages = [img1, img2,img3,img4,img5,img6,img7,img8];
    setImages(localImages);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };
  // debugger
  console.log("images==>",images)
  return (
    <div className="relative w-full h-80">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute min-w-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full cusImg"
          />
        </div>
      ))}
      <SlideContent />
      <div className="absolute z-30 flex items-center justify-center w-full -bottom-72">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-24 h-2 rounded-full mx-1 transition-colors duration-300 ${
              index === currentSlide ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
      <button
        className="absolute left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer top-28 group focus:outline-none"
        onClick={prevSlide}
      >
  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-green-500 dark:group-hover:bg-green-500 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none`}>
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        className="absolute right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer top-28 group focus:outline-none"
        onClick={nextSlide}
      >
  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-green-500 dark:group-hover:bg-green-500 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none`}>
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default SlideShow;
