import { Link, useParams } from "react-router-dom";
import { useMainContext } from "../context/context";
import convertDate from "../functions/convertDate";
import { searchMovies } from "../components/searchMovies";
import { useEffect } from "react";
import Loading from "./Loading";
import nophoto from "../images/nophoto.jpg";
import { useNavigate } from "react-router-dom";

const Details = () => {
  window.scrollTo(0, 0);
  const {
    state: { item, detailLoading, videos },
    dispatch,
  } = useMainContext();
  let nevigator = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const data = await searchMovies(`/movie/${+id.slice(1)}`);
      const data2 = await searchMovies(`/movie/${+id.slice(1)}/videos`);
      dispatch({ type: "GET_MOVIE", playload: data.data });
      dispatch({ type: "GET_VIDEOS", playload: data2.data.results });
    };

    getMovie();
  }, [dispatch, id]);

  if (detailLoading) {
    return (
      <div className="details">
        <Loading />
      </div>
    );
  }

  const image = <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />;
  const noImage = <img src={nophoto} alt="" />;

  return (
    <div className="details">
      <div className="container">
        <div className="content">
          <div className="image">{item.poster_path ? image : noImage}</div>
          <div className="info">
            <div className="title"> {item.title} </div>
            <p>{item.overview}</p>
            <b> {convertDate(item.release_date)} </b>
            <b>
              User Score <span style={{ color: "#607d8b" }}>{item.vote_average.toFixed(2)}</span>/10 <span style={{ fontSize: "13px", color: "#607d8b" }}>({item.vote_count} Ratings)</span>
            </b>
            <div className="btn" onClick={() => nevigator(-1)}>
              Go Back
            </div>
            <div className="trailers">
              <h2>trailers</h2>
              <div className="videos">
                {!videos.length
                  ? "there isn't any trailer avaible"
                  : videos.map((e) => {
                      return (
                        <div className="video" key={e.key}>
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${e.key}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
