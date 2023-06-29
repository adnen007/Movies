//import slide from "../images/slide.jpeg";
import { useState, useEffect } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useMainContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const Slider = ({ list }) => {
  const [x, setX] = useState(0);
  const { dispatch } = useMainContext();
  const navigator = useNavigate();
  const onRowClick = (step) => {
    if (window.innerWidth >= 768) {
      if (x + step <= 0 && x + step >= -Math.abs(step * 16)) {
        setX(x + step);
      } else if (x + step > 0) {
        setX(step * -16);
      } else if (x + step < -Math.abs(step * 16)) {
        setX(0);
      }
    } else {
      if (x + step <= 0 && x + step >= -Math.abs(step * 17)) {
        setX(x + step);
      } else if (x + step > 0) {
        setX(step * -17);
      } else if (x + step < -Math.abs(step * 17)) {
        setX(0);
      }
    }
  };

  const onSlideClick = (id) => {
    dispatch({ type: "DETAIL_LOADING", playload: true });
    navigator(`/details:${id}`);
  };

  useEffect(() => {
    const reset = () => {
      setX(0);
    };
    window.addEventListener("resize", reset);
    return () => window.removeEventListener("resize", reset);
  });
  return (
    <div className="slider">
      <div
        className="left"
        onClick={() => onRowClick(window.innerWidth >= 768 ? 25.25 : 52)}
      >
        <BsChevronDoubleLeft />
      </div>
      <div
        className="right"
        onClick={() => onRowClick(window.innerWidth >= 768 ? -25.25 : -52)}
      >
        <BsChevronDoubleRight />
      </div>
      <div style={{ transform: `translateX(${x}%)` }}>
        {list.map((e) => {
          return (
            <div className="slide" key={e.id} onClick={() => onSlideClick(e.id)}>
              <img src={`https://image.tmdb.org/t/p/w500/${e.backdrop_path}`} alt="" />
              <div className="cover"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;

// fist of all i used the width of the document (vw) to set the width of the slider
// also i used the vw to set the width of the image
// also i have a div inside the slider has all the slides
// and all what i do cause i know the with of the slider the slide and the div i only tranlite
// that div by one slide
// i use the 'd' just to m
