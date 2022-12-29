import ContentList from "../components/ContentList";
import { useMainContext } from "../context/context";
import Loading from "./Loading";
import PageSurffing from "../components/PageSurffing";

import useFetch from "../hooks/useFetch";
const MoviesList = () => {
  const { state } = useMainContext();

  const {
    err,
    loading,

    params,
  } = state;

  useFetch("/search/movie", params);

  return (
    <div className="movies-list">
      {loading ? <Loading /> : err ? <div className="error">sorry !! something went wrong try again later :( </div> : <ContentList />}
      <PageSurffing />
    </div>
  );
};
export default MoviesList;
