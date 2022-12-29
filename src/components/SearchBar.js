import { useMainContext } from "../context/context";
import Filter from "../components/Filter";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const SearchBar = () => {
  const {
    dispatch,
    state: {
      params: { query },
    },
  } = useMainContext();

  const nevigator = useNavigate();
  const location = useLocation();

  const onInputChange = (e) => {
    if (location.pathname !== "/movies_list") {
      nevigator("/movies_list");
    }
    dispatch({ type: "SEARCH", playload: e.target.value });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-bar">
      <form onSubmit={onFormSubmit}>
        <div className="search-input">
          <div className="search">
            <input value={query} onChange={(e) => onInputChange(e)} />

            <BsSearch />
          </div>
          {location.pathname === "/movies_list" ? <Filter /> : ""}
        </div>
      </form>
    </div>
  );
};
export default SearchBar;

// state for doing the contorled from and it is a frorm that watching the value of it  is
// input when the value change it take it from the html element register it in it and then (do
// some operation if it need ) and overwrite the value of the input by this way it doesn't have
// to come back to take the value from the html element each time it need that (and the harder )
// especially in react and it will always has the last value inside it for something like reser
