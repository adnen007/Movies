//import slide from "../images/slide.jpeg";
import { useState, useEffect } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useMainContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const Slider = ({ list }) => {
  const [x, setX] = useState(0);
  const { dispatch } = useMainContext();
  const navigator = useNavigate();
  const onRowClick = (d) => {
    if (window.innerWidth >= 768) {
      if (x + d > 0) {
        setX(-324.8);
      } else if (x + d < -324.8) {
        setX(0);
      } else {
        setX(x + d);
      }
    } else {
      if (x + d > 0) {
        setX(-725.4);
      } else if (x + d < -725.4) {
        setX(0);
      } else {
        setX(x + d);
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
      <div className="left" onClick={() => onRowClick(window.innerWidth >= 768 ? 20.3 : 40.3)}>
        <BsChevronDoubleLeft />
      </div>
      <div className="right" onClick={() => onRowClick(window.innerWidth >= 768 ? -20.3 : -40.3)}>
        <BsChevronDoubleRight />
      </div>
      <div style={{ transform: `translateX(${x}vw)` }}>
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
