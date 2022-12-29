import React, { useContext } from "react";
import { useReducer } from "react";
import reducer from "../Reducers/reducer";
const mainContext = React.createContext();

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    data: {},
    list: [],
    videos: [],
    lists: { top: [], playingNow: [], popular: [], commingSoon: [] },
    params: { primary_release_year: "", include_adult: false, query: "batman", page: 1 },
    item: "",
    loading: true,
    detailLoading: true,
    firstPNumber: 1,
    err: "",
  });

  // why the warnning of missing dependency even happens ?
  // the warning happen when you use inside the use effect a varaible that declared in
  // the component in every rerender the varaible may change but cause the use effect
  // not necessarily excecute in each render the use effect can execute and get the old
  // value of the varaible from its outer envirenment
  // and this can lead to hard bugs
  // cause if this you should make sure to put the varaible in the dependency to make sure that
  // the use effect get the recent value.

  return (
    <mainContext.Provider value={{ state, dispatch }}>
      <>{children}</>
    </mainContext.Provider>
  );
};
const useMainContext = () => {
  return useContext(mainContext);
};

export { AppContext, useMainContext };
