import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { SpeedInsights } from "@vercel/speed-insights/next"
function HomeSectionCarousel({ data, SectionName }) {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const carouselInstance = React.useRef();

  const slideNext = () => {
    carouselInstance.current.slideNext();
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const slidePrev = () => {
    carouselInstance.current.slidePrev();
    setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);
  
  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold textgrey-800 py-5">{SectionName}</h2>
      <div className="relative p-5 ">
        <div><SpeedInsights /></div>
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}  // Use onSlideChanged instead of onSlideChange
          ref={carouselInstance}
        />
        {activeIndex !== items.length - 4 && (
          <Button
            variant="contained"
            className="z-50 bg-white "
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
              "@media (max-width: 768px)": {
                top: "5rem",
              },
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white "
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
              "@media (max-width: 768px)": {
                top: "5rem",
              },
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
