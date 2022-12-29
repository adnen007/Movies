import { useEffect } from "react";
import { searchMovies } from "../components/searchMovies";
import { useMainContext } from "../context/context";
const useFetch = (url, { query, page, primary_release_year, include_adult }) => {
  const { dispatch } = useMainContext();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "LOADING", playload: true });
      try {
        const { data } = await searchMovies(url, { params: { query, page, primary_release_year, include_adult } });
        dispatch({ type: "FETCH", playload: data });
        dispatch({ type: "FIRST_PAGE_NUMBER" });
        window.scrollTo(0, 0);
      } catch (err) {
        console.log(err);
        dispatch({ type: "ERROR", playload: err });
      }
    };
    let outId = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(outId);
  }, [query, page, dispatch, primary_release_year, include_adult, url]);
};

export default useFetch;
