import { useMainContext } from "../context/context";
import YearInterval from "./YearInterval";

const Filter = () => {
  const { state, dispatch } = useMainContext();

  const onAdultClick = () => {
    dispatch({ type: "ADULT", playload: !state.params.include_adult });
  };
  return (
    <div className="filter">
      <div onClick={onAdultClick} className={state.params.include_adult ? "green" : "red"}>
        ADUlT
      </div>
      <YearInterval />
    </div>
  );
};

export default Filter;
