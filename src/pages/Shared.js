import { AppContext } from "../context/context";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Details";
import MoviesList from "./MoviesList";
import Home from "./Home";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Shared = () => {
  return (
    <BrowserRouter>
      <AppContext>
        <div className="shared ">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies_list" element={<MoviesList />} />
            <Route path="/details:id" element={<Details />} />
          </Routes>
          <Footer />
        </div>
      </AppContext>
    </BrowserRouter>
  );
};

export default Shared;

// with Routes you don't need to worry about the Route order he will order the route(s) and
// make sure to render the short path first and the error path * at the end
// end it will return a tree component match the current path
