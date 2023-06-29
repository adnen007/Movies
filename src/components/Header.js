import { Link } from "react-router-dom";

// import { BsSearch } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <MdLocalMovies />
            MOVIES
          </Link>
        </div>

        {/* <div className="search-icon">
          <Link to="/movies_list">
            <BsSearch />
          </Link>
        </div> */}
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
