import { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useEffect } from "react";
import { useMainContext } from "../context/context";
import Slider from "../components/Slider";
import { searchMovies } from "../components/searchMovies";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {
    state: {
      lists: { top, playingNow, popular, commingSoon },
    },
    dispatch,
  } = useMainContext();
  const [x, setX] = useState(0);
  const navigator = useNavigate();

  const onRowClick = (step) => {
    if (window.innerWidth >= 768) {
      if (x + step <= 0 && x + step >= -Math.abs(step * 18)) {
        setX(x + step);
      } else if (x + step > 0) {
        setX(step * -18);
      } else if (x + step < -Math.abs(step * 18)) {
        setX(0);
      }
    } else {
      if (x + step <= 0 && x + step >= -Math.abs(step * 19)) {
        setX(x + step);
      } else if (x + step > 0) {
        setX(step * -19);
      } else if (x + step < -Math.abs(step * 19)) {
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
    const fetch = async () => {
      const { data } = await searchMovies("/movie/now_playing");
      const { data: data2 } = await searchMovies("/movie/top_rated");
      const { data: data3 } = await searchMovies("/movie/popular");
      const { data: data4 } = await searchMovies("/movie/upcoming");

      dispatch({ type: "PLAYING_NOW", playload: data.results });
      dispatch({ type: "TOP", playload: data2.results });
      dispatch({ type: "POPULAR", playload: data3.results });
      dispatch({ type: "COMMING_SOON", playload: data4.results });
    };
    fetch();
    return () => window.removeEventListener("resize", reset);
  }, [dispatch]);
  if (
    popular.length === 0 ||
    commingSoon.length === 0 ||
    top.length === 0 ||
    playingNow === 0
  ) {
    return <Loading />;
  }
  return (
    <div className="home">
      <div className="container">
        <div className="trending">
          <h2>PLAYING NOW</h2>
          <div className="slider">
            <div
              className="left"
              onClick={() => onRowClick(window.innerWidth >= 768 ? 51 : 100)}
            >
              <BsChevronDoubleLeft />
            </div>
            <div
              className="right"
              onClick={() => onRowClick(window.innerWidth >= 768 ? -51 : -100)}
            >
              <BsChevronDoubleRight />
            </div>

            <div style={{ transform: `translateX(calc( ${x}% ) )` }}>
              {playingNow.map((e) => {
                return (
                  <div className="slide" key={e.id} onClick={() => onSlideClick(e.id)}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${e.backdrop_path}`}
                      alt=""
                    />
                    <div className="cover"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="slider-c">
          <h2> TOP RATING</h2>
          <Slider list={top} />
        </div>
        <div className="slider-c">
          <h2> POPULAR</h2>
          <Slider list={popular} />
        </div>
        <div className="slider-c">
          <h2> COMMING SOON</h2>
          <Slider list={commingSoon} />
        </div>
      </div>
    </div>
  );
};

export default Home;
