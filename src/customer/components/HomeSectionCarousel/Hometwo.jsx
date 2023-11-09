import { Button } from "@mui/material";
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import { mens_kurta } from "../../../Data/mens_kurta";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
// this code for checking , and now it is not been in use -----------------




// const items = [
//   <div className="item" data-value="1">
//     1
//   </div>,
//   <div className="item" data-value="2">
//     2
//   </div>,
//   <div className="item" data-value="3">
//     3
//   </div>,
//   <div className="item" data-value="4">
//     4
//   </div>,
//   <div className="item" data-value="5">
//     5
//   </div>,
// ];
// const items ={mens_kurta};

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
      <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
          <HomeSectionCard product={item}/>
      </div>
  ));
};

function Hometwo ({data}) {

  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(
    thumbItems(data, [setThumbIndex, setThumbAnimation])
  );
  const items = data.slice(0,10).slice(0,10).map((item) => <HomeSectionCard product={item} />);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncMainBeforeChange = (e) => {
    setMainAnimation(true);
  };

  const syncMainAfterChange = (e) => {
    setMainAnimation(false);

    if (e.type === "action") {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

  const syncThumbs = (e) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);

    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };

  return [
    <AliceCarousel
      activeIndex={mainIndex}
      animationType="fadeout"
      animationDuration={800}
      responsive={responsive}
      disableDotsControls
      disableButtonsControls
      items={items}
      mouseTracking={!thumbAnimation}
      onSlideChange={syncMainBeforeChange}
      onSlideChanged={syncMainAfterChange}
      touchTracking={!thumbAnimation}
    />,
    <div className=" thumbs border">
    <h2 className="text-2xl font-extrabold textgrey-800 py-5"></h2>
    <div className="relative p-5 ">
      <AliceCarousel
        activeIndex={thumbIndex}
        responsive={responsive}
        autoWidth
        disableDotsControls
        disableButtonsControls
        items={thumbs}
        mouseTracking={false}
        onSlideChanged={syncThumbs}
        touchTracking={!mainAnimation}
      />
      <Button
        variant="contained"
        className="z-50 bg-white "
        onClick={slidePrev}
        sx={{
          position: "absolute",
          top: "8rem",
          right: "0rem",
          transform: "translateX(50%) rotate(90deg)",
          bgcolor: "white",
        }}
        aria-label="next"
      >
        <KeyboardArrowLeftIcon
          sx={{ transform: "rotate(90deg)", color: "black" }}
        />
      </Button>
      {/* <div className="btn-prev">
        &lang;
      </div> */}

      <Button
        onClick={slideNext}
        variant="contained"
        className="z-50 bg-white "
        sx={{
          position: "absolute",
          top: "8rem",
          left: "0rem",
          transform: "translateX(-50%) rotate(-90deg)",
          bgcolor: "white",
        }}
        aria-label="next"
      >
        <KeyboardArrowLeftIcon
          sx={{ transform: "rotate(90deg)", color: "black" }}
        />
      </Button>
      {/* <div className="btn-next" onClick={slideNext}>
        &rang;*/}
      </div> 
    </div>,
  ];
};
export default Hometwo;
