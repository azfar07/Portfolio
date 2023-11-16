import React, { useEffect,useRef } from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";

import { Slide } from "./../SlideShow/Slide";

const data = [
  {
    image: "https://www.youtube.com/watch?v=7H_QH9nipNs&ab_channel=CodeWithHarry",
    text: "hello"
  },
  {
    image: "https://www.youtube.com/watch?v=8T5u7G4FyOo&ab_channel=PakWheels.com",
    text: "lel"
  },
  {
    image: "https://www.youtube.com/watch?v=JausGTBu56E&ab_channel=PakWheels.com",
    text: "kak"
  },
  {
    image: "https://www.youtube.com/watch?v=e9rYfHww87I",
    text: "kk"
  },
  {
    image: "https://www.youtube.com/watch?v=YR6pMpKqzJE&ab_channel=UKHANO",
    text: "away"
  }
];

function  MirrorCarousel() {
  const ref = useRef(StackedCarousel);


  useEffect(() => {
    setInterval(stuff, 100000);
    console.log("i fire once");
  }, []);

  function stuff() {
    ref.current?.goNext();
  }

  return (
    <div className="card">
      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={350}
                height={260}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={5}
                disableSwipe
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
              />
            );
          }}
        />
      </div>
      
    </div>
  );
};

export default MirrorCarousel;
