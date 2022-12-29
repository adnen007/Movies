import { useNavigate } from "react-router-dom";
import nophoto from "../images/nophoto.jpg";
const Box = ({ item: { id, poster_path, title, release_date }, dispatch }) => {
  const navigator = useNavigate();
  const onBoxClick = () => {
    dispatch({ type: "DETAIL_LOADING", playload: true });
    navigator(`/details:${id}`);
  };

  const image = <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />;
  const noImage = <img src={nophoto} alt="" />;
  return (
    <div className="box" onClick={onBoxClick}>
      {poster_path ? image : noImage}
      <div className="info">
        <p>{title}</p>
        <p>{release_date ? release_date.slice(0, 4) : ""}</p>
      </div>
    </div>
  );
};
export default Box;
