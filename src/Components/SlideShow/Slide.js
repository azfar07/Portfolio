import React from "react";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
// import "./Slide.css";

export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } =
    StackedCarouselSlideProps;
debugger
  const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;

  console.log(coverImage);
  return (
    <div className="card-card" draggable={false} style={{ height: "400px" }}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <div className="detail fill">
        <div className="discription">
          {/* <img
            style={{ width: 100 }}
            alt="j"
            className="cover-image"
            src={coverImage}
          /> */}
          {/* <video controls className="cover-image" width="100%" height="100%">
            <source src={coverImage} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
            <iframe
            width="100%"
            height="100%"
            src={coverImage.replace("watch?v=", "embed/")}
            title={`video-${dataIndex}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          {/* <p>{text}</p> */}
        </div>
      </div>
    </div>
  );
});
